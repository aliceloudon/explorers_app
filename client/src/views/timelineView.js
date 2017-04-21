var TimelineView = function(timelineList){
  this.timelineList = timelineList
}

TimelineView.prototype = {

  render: function(explorers){
    explorers.forEach(function(explorer){
      var li = document.createElement('li')
      var div = document.createElement('div')
      div.innerText = explorer.date + '\n' + explorer.title
      li.appendChild(div)
      this.timelineList.appendChild(li)
    }.bind(this))
  }

}

module.exports = TimelineView