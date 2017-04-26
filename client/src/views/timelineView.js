var TimelineView = function(timelineList){
  this.timelineList = timelineList
}

TimelineView.prototype = {

  render: function(explorers, mapView, videoView, textInfoView){
    explorers.forEach(function(explorer){
      var itemContainer = document.createElement('div')
      var li = document.createElement('li')
      var date = document.createElement('div')
      date.innerHTML = '<a href="#explore"><h2>' + explorer.date + '</h2></a>'
      date.className = 'timeline-text'
      li.appendChild(date)
      var title = document.createElement('p')
      title.innerHTML = '<a href="#explore"><p>' + explorer.title + '</p></a>'
      title.className = 'timeline-text'
      date.appendChild(title)
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