var QuizView = function(quizWindow, quizContent, closeButton, quiz){
  this.quizWindow = quizWindow
  this.quizContent = quizContent
  this.closeButton = closeButton
  this.quiz = quiz
  this.questionsToAsk = []
}

QuizView.prototype = {
  beginQuiz: function(questions){
    this.quizContent.innerHTML = ""
    var header = document.createElement("h3")
    header.innerText = "Quiz yourself on what you've learned!"
    var text = document.createElement("p")
    text.innerText = "Answer 5 questions about what you've leanred, try to beat your high score!"
    var beginButton = document.createElement("button")
    beginButton.innerText = "Begin"
    beginButton.className = "begin-quiz-button"
    this.quizContent.appendChild(this.closeButton)
    this.quizContent.appendChild(header)
    this.quizContent.appendChild(text)
    this.quizContent.appendChild(beginButton)
    beginButton.addEventListener('click', function(){
      this.questionsToAsk = this.quiz.getQuestions(5)
      console.log(this.questionsToAsk)
      // ask the first question
      // each question gets asked until the array is finished, show a score
    }.bind(this))
    this.quizWindow.style.display = "block"
  }
}

module.exports = QuizView