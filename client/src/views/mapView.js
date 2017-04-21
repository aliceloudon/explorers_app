var MapView = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
  this.markers = []

}

MapView.prototype = {

  addMarkers: function(explorer){
    console.log(explorer)
    console.log(explorer.endcoord)
    var startMarker = new google.maps.Marker({
      position: explorer.startcoord,
      map: this.googleMap
    })
    this.markers.push(startMarker)

    var endMarker = new google.maps.Marker({
      position: explorer.endcoord,
      map: this.googleMap
    })
    this.markers.push(endMarker)

    var contentString = "<h3>" + explorer.title + "</h3>" + "<p>" + explorer.info + "</p>"

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    infowindow.open(this.googleMap, endMarker);

    this.googleMap.setZoom(5)
    this.googleMap.setCenter(explorer.endcoord)
  },

  clearMarkers: function(){
    this.markers.forEach(function(marker){
      marker.setMap(null)
    })
    this.markers = []
  }

}

module.exports = MapView