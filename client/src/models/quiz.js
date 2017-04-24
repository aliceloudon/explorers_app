var Quiz = function(url){
  this.url = url
  this.questions = []
  this.score = 0
  this.answeredQuestions = []
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
    var allItems = []
    arrayToRandomise.forEach(function(item){
      allItems.push(item)
    })
    while(selectedItems.length < numberToGet){
      var randomIndex = Math.floor(Math.random() * (allItems.length))
      selectedItems.push(allItems[randomIndex])
      allItems.splice(randomIndex, 1)
      if(allItems.length === 0) {break}
    }
    return selectedItems
  },

  checkAnswer: function(answer, question){
    if(!this.answeredQuestions.includes(question)){
      if(answer.correct === true){
        this.score += 1
        this.answeredQuestions.push(question)
      }
    }
    
  },

  reset: function(){
    this.score = 0
    this.answeredQuestions = []
  }
}

module.exports = Quiz