var QuizQuestions = function(url){
  this.url = url
  this.questions = []
}

QuizQuestions.prototype = {
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
  }
}

module.exports = QuizQuestions