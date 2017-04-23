var ExplorersList = require("./models/explorersList")
var MapView = require("./views/mapView")
var TimelineView = require("./views/timelineView")
var QuizQuestions = require("./models/quizQuestions")

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

  var quizQuestions = new QuizQuestions("http://localhost:3000/api/quiz")

  var quiz = document.getElementById("quiz")
  var quizButton = document.getElementById("quiz-button")
  var span = document.getElementById("close")

  quizQuestions.makeRequest(function(questions){
    quizButton.addEventListener('click', function(){
      console.log(questions)
    })
  })

}

window.onload = app