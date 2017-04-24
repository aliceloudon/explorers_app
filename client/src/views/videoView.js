var VideoView = function(videoView){
  this.videoView = videoView
}

VideoView.prototype = {

  render: function(explorer){
    this.videoView.innerHTML = ''
    var iframe = document.createElement('iframe')
    iframe.src = explorer.url
    iframe.className = 'video'
    this.videoView.appendChild(iframe)
  }

}

module.exports = VideoView