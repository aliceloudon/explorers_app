var MapView = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
  this.markers = []

}

MapView.prototype = {

  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    this.markers.push(marker)
  },

  clearMarkers: function(){
    this.markers.forEach(function(marker){
      marker.setMap(null)
    })
    this.markers = []
  }

}

module.exports = MapView