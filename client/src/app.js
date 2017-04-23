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
  
    timelineView.render(explorers, mapView)

  })

  var quiz = document.getElementById("quiz")
  var quizButton = document.getElementById("quiz-button")
  var span = document.getElementsById("close")




}

window.onload = app