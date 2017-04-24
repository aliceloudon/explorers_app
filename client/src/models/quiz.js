var Quiz = function(url){
  this.url = url
  this.questions = []
}

Quiz.prototype = {
  makeRequest: function(callback){
    var request = new XMLHttpRequest()
    request.open("GET", this.url)
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText
        this.questions = JSON.parse(jsonString)
        callback(this.questions)
      }
    }.bind(this)
    request.send()
  },

  randomiseArray: function(numberToGet, arrayToRandomise){
    var selectedItems = []
    var allItems = arrayToRandomise
    while(selectedItems.length < numberToGet){
      var randomIndex = Math.floor(Math.random() * (allItems.length))
      selectedItems.push(allItems[randomIndex])
      allItems.splice(randomIndex, 1)
      if(allItems.length === 0) {break}
    }
    return selectedItems
  },
}

module.exports = Quiz