var QuizView = function(quizWindow, quizContent, closeButton, quiz){
  this.quizWindow = quizWindow
  this.quizContent = quizContent
  this.closeButton = closeButton
  this.quiz = quiz
  this.questionsToAsk = []
  this.numberOfQuestions = 5
  this.currentQuestion = 0
}

QuizView.prototype = {
  beginQuiz: function(questions){
    this.quizContent.innerHTML = ""
    this.quiz.reset()
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
      this.questionsToAsk = this.quiz.randomiseArray(this.numberOfQuestions, this.quiz.questions)
      this.currentQuestion = 0
      this.displayQuestion(this.questionsToAsk[this.currentQuestion])
    }.bind(this))
    this.quizWindow.style.display = "block"
  },

  displayQuestion: function(questionToAsk){
    this.quizContent.innerHTML = ""
    this.quizContent.appendChild(this.closeButton)

    var quizStats = document.createElement("div")
    quizStats.className = "quiz-stats"
    var questionNumber = document.createElement("p")
    questionNumber.innerText = "Question " + (this.currentQuestion + 1)
    var score = document.createElement("p")
    score.id = "score"
    score.innerText = this.quiz.score + "/" + this.numberOfQuestions

    quizStats.appendChild(questionNumber)
    quizStats.appendChild(score)

    this.quizContent.appendChild(quizStats)


    var question = document.createElement("h4")
    question.innerText = questionToAsk.question
    this.quizContent.appendChild(question)

    var answerContainer = document.createElement('div')
    answerContainer.className = "quiz-answer-container"
    var randomisedAnswers = this.quiz.randomiseArray(questionToAsk.answers.length, questionToAsk.answers)
    var self = this
    randomisedAnswers.forEach(function(answer){
      var button = document.createElement('button')
      button.value = JSON.stringify(answer)
      button.innerText = answer.text
      button.className = "quiz-answer-button"

      button.addEventListener('click', function(){
        var buttons = answerContainer.childNodes
        buttons.forEach(function(button){
          var buttonAnswer = JSON.parse(button.value)
          if(buttonAnswer.correct){
            button.className += " show-correct"
          } else {
            button.className += " show-incorrect"
          }
        })
        self.quiz.checkAnswer(JSON.parse(this.value), questionToAsk)
        var score = document.querySelector("#score")
        score.innerText = self.quiz.score + "/" + self.numberOfQuestions
        self.currentQuestion += 1
        if(self.currentQuestion < self.numberOfQuestions){
          var nextQuestion = self.questionsToAsk[self.currentQuestion]
          var nextQuestionDisplay = function(){self.displayQuestion(nextQuestion)}
          window.setTimeout(nextQuestionDisplay, 2000);
        } else {
          self.displayResults()
        }
      })
      answerContainer.appendChild(button)
    })
      
    this.quizContent.appendChild(answerContainer)

  },

  displayResults: function(){
    this.quizContent.innerHTML = ""
    this.quizContent.appendChild(this.closeButton)
    var results = document.createElement("h3")
    results.innerText = "You scored " + this.quiz.score + " out of " + this.numberOfQuestions + "!"
    this.quizContent.appendChild(results)
  }

}

module.exports = QuizView