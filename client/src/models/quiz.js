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

  getQuestions: function(numberToGet){
    var selectedQuestions = []
    var allQuestions = this.questions
    while(selectedQuestions.length < numberToGet){
      var randomIndex = Math.floor(Math.random() * (this.questions.length))
      selectedQuestions.push(allQuestions[randomIndex])
      allQuestions.splice(randomIndex, 1)
      if(allQuestions.length === 0) {break}
    }
    return selectedQuestions
  }
}

module.exports = Quiz