var TimelineView = function(timelineList){
  this.timelineList = timelineList
}

TimelineView.prototype = {

  render: function(explorers, mapView, videoView, textInfoView){
    explorers.forEach(function(explorer){
      var itemContainer = document.createElement('div')
      var li = document.createElement('li')
      var text = document.createElement('div')
      text.innerHTML = '<a href="#explore"><h2>' + explorer.date + '</h2><p>' + explorer.title + '</p></a>'
      text.className = 'timeline-text'
      li.appendChild(text)
      this.timelineList.appendChild(li)
      li.addEventListener('click', function(){
        mapView.clearMarkers()
        mapView.clearLines()
        mapView.addMarkers(explorer)
        videoView.render(explorer)
        textInfoView.render(explorer)
      })
    }.bind(this))
  }

}

module.exports = TimelineView