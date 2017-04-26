var MapView = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    styles: [
    {
        "elementType": "labels",
        "stylers": [
            {"visibility": "on"},
            // {"color": "#f49f53"}
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {"color": "#B5D785"},
            {"lightness": -7}
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {"visibility": "off"},
            {"color": "#813033"},
            {"lightness": 43}
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {"color": "#7ECCF6"},
            {"saturation": -69},
            {"gamma": 0.99},
            {"lightness": 43}
        ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "off" }
      ]
    }
]
  })
  this.markers = []
  this.lines = []

}

MapView.prototype = {

 

  addMarkers: function(explorer){

    var startPointIcon = {
        url: explorer.icon,
        scaledSize: new google.maps.Size(30, 30), 
        origin: new google.maps.Point(0,0), 
        anchor: new google.maps.Point(0, 0) 
    } 

    var endPointIcon = {
        url: "https://cdn4.iconfinder.com/data/icons/maps-and-location/128/Map__Location_x_marks_spot-10-256.png",
        scaledSize: new google.maps.Size(30, 30), 
        origin: new google.maps.Point(0,0), 
        anchor: new google.maps.Point(0, 0) 
    }  

    var startMarker = new google.maps.Marker({
      position: explorer.startcoord,
      map: this.googleMap,
      icon: startPointIcon
    })
    this.markers.push(startMarker)

    var endMarker = new google.maps.Marker({
      position: explorer.endcoord,
      map: this.googleMap,
      icon: endPointIcon
    })
    this.markers.push(endMarker)

    var contentString = "<h3>" + explorer.title + "</h3>" + "<p><b>" + explorer.name + "</b></p>" + "<p>" + "<img width='150' src=" + explorer.image + ">"

    var infowindow = new google.maps.InfoWindow({
      content: contentString, maxWidth: 400
    });

    infowindow.open(this.googleMap, endMarker)

    endMarker.addListener('click', function(){
      infowindow.open(this.googleMap, endMarker)  
    }.bind(this))

    var lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      strokeWeight: 2,
      scale: 4,
    }

    var allCoords = []

    allCoords.push(explorer.startcoord)
    if(explorer.waypoints){
      explorer.waypoints.forEach(function(coords){
        allCoords.push(coords)
      })
    }
    allCoords.push(explorer.endcoord)
    

    for(var i = 0; i < allCoords.length - 1; i++){
      var line = new google.maps.Polyline({
          path: [
              new google.maps.LatLng(allCoords[i].lat, allCoords[i].lng), 
              new google.maps.LatLng(allCoords[i+1].lat, allCoords[i+1].lng)
          ],
          strokeColor: "#FF0000",
          strokeOpacity: 0,
          icons: [{
              icon: lineSymbol,
              offset: '0',
              repeat: '20px'
            }],
          geodesic: true,
          map: this.googleMap
      })
      this.lines.push(line)
    }

    this.googleMap.setZoom(3)
    this.googleMap.setCenter(explorer.endcoord)
  },

  clearMarkers: function(){
    this.markers.forEach(function(marker){
      marker.setMap(null)
    })
    this.markers = []
  },

  clearLines: function(){
    this.lines.forEach(function(line){
      line.setMap(null)
    })
    this.lines = []
  }

}

module.exports = MapView