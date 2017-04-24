var TimelineView = function(timelineList){
  this.timelineList = timelineList
}

TimelineView.prototype = {

  render: function(explorers, mapView, videoView){
    explorers.forEach(function(explorer){
      var itemContainer = document.createElement('div')
      var li = document.createElement('li')
      var div = document.createElement('div')
      div.innerText = explorer.date + '\n' + explorer.title
      li.appendChild(div)
      this.timelineList.appendChild(li)
      li.addEventListener('click', function(){
        mapView.clearMarkers()
        mapView.clearLines()
        mapView.addMarkers(explorer)
        videoView.render(explorer)
      })
    }.bind(this))
  }

}

module.exports = TimelineView