var TimelineView = function(timelineList){
  this.timelineList = timelineList
}

TimelineView.prototype = {

  render: function(explorers, mapView){
    explorers.forEach(function(explorer){
      var li = document.createElement('li')
      // li.className = 'timeline-item'
      var div = document.createElement('div')
      div.innerText = explorer.date + '\n' + explorer.title
      li.appendChild(div)
      this.timelineList.appendChild(li)

      li.addEventListener('click', function(){
        mapView.clearMarkers()
        mapView.addMarkers(explorer)
      })
    }.bind(this))
  }

}

module.exports = TimelineView