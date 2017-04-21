var ExplorersList = function(url){
  this.url = url
  this.explorers = []
}

ExplorersList.prototype = {
  makeRequest: function(callback){
    var request = new XMLHttpRequest()
    request.open("GET", this.url)
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText
        this.explorers = JSON.parse(jsonString)
        callback(this.explorers)
      }
    }.bind(this)
    request.send()
  }
}

module.exports = ExplorersList