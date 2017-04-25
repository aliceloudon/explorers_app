var ExplorersList = require("./models/explorersList")
var MapView = require("./views/mapView")
var TimelineView = require("./views/timelineView")
var VideoView = require("./views/videoView")
var TileGameView = require("./views/tileGameView")

var app = function(){

  var mapContainer = document.querySelector('#map')
  var center = {lat:0, lng:0}
  var zoom = 2

  var mapView = new MapView(mapContainer, center, zoom)
  var explorersList = new ExplorersList("http://localhost:3000/api/explorers")
  var timelineView = new TimelineView(document.querySelector('#timeline-list'))
  var videoView = new VideoView(document.querySelector('#video'))

  

  explorersList.makeRequest(function(explorers){
    var tileGameView = new TileGameView(document.querySelector('#memory-game'), explorers)
    tileGameView.render()

    timelineView.render(explorers, mapView, videoView)
  })

}

window.onload = app