var QuizView = function(quizWindow, quizContent, closeButton, quiz){
  this.quizWindow = quizWindow
  this.quizContent = quizContent
  this.closeButton = closeButton
  this.quiz = quiz
}

QuizView.prototype = {
  beginQuiz: function(questions){
    this.quizContent.innerHTML = ""
    var header = document.createElement('h3')
    header.innerText = "Quiz yourself on what you've learned!"
    var text = document.createElement('p')
    text.innerText = "Answer 5 questions about what you've leanred, try to beat your high score!"
    this.quizContent.appendChild(this.closeButton)
    this.quizContent.appendChild(header)
    this.quizContent.appendChild(text)
    this.quizWindow.style.display = "block"
  }
}

module.exports = QuizView