var ExplorersList = require("./models/explorersList")
var MapView = require("./views/mapView")
var TimelineView = require("./views/timelineView")

var app = function(){

  var mapContainer = document.querySelector('#map')
  var center = {lat:0, lng:0}
  var zoom = 2

  var mapView = new MapView(mapContainer, center, zoom)
  var explorersList = new ExplorersList("http://localhost:3000/api/explorers")
  var timelineView = new TimelineView(document.querySelector('#timeline-list'))
  

  explorersList.makeRequest(function(explorers){

    // explorers.forEach(function(explorer){
    //   var explorerToShow = explorer
    //   var button = document.createElement('button')
    //   button.innerHTML = explorer.name
    //   var ul = document.querySelector('ul')
    //   ul.appendChild(button)
      // button.addEventListener('click', function(){
      //   mapView.clearMarkers()
      //   mapView.addMarkers(explorerToShow)
      // })
    // })
  
    timelineView.render(explorers, mapView)


  })




}

window.onload = app