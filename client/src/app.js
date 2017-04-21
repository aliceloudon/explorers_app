var ExplorersList = require("./models/explorersList")
var MapView = require("./views/mapView")

var app = function(){
  var explorersList = new ExplorersList("http://localhost:3000/api/explorers")
  explorersList.makeRequest(function(explorers){
    explorers.forEach(function(explorer){
      var name = document.createElement('li')
      name.innerText = explorer.name
      var ul = document.querySelector('ul')
      ul.appendChild(name)
    })
  })
}

window.onload = app