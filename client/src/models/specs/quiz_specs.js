var Quiz = require('../quiz.js')
var assert = require('assert')

describe("Quiz", function(){

  var quiz
  var emptyQuiz
  var questions
  var question
  var correctAnswer
  var incorrectAnswer

  beforeEach(function(){

    emptyQuiz = new Quiz("url")
    quiz = new Quiz("url")
    questions = [
      {
        question: "question1",
        answers: [
          {text: "correct1", correct: true},
          {text: "wrong1-1", correct: false},
          {text: "wrong1-2", correct: false},
          {text: "wrong1-3", correct: false}
        ]
      },
      {
      question: "question2",
      answers: [
        {text: "correct2", correct: true},
        {text: "wrong2-1", correct: false},
        {text: "wrong2-2", correct: false},
        {text: "wrong2-3", correct: false}
        ]
      },
      {
      question: "question3",
      answers: [
        {text: "correct3", correct: true},
        {text: "wrong3-1", correct: false},
        {text: "wrong3-2", correct: false},
        {text: "wrong3-3", correct: false}
      ]
    },
    {
      question: "question4",
      answers: [
        {text: "correct4", correct: true},
        {text: "wrong4-1", correct: false},
        {text: "wrong4-2", correct: false},
        {text: "wrong4-3", correct: false}
      ]
    },
    {
      question: "question5",
      answers: [
        {text: "correct5", correct: true},
        {text: "wrong5-1", correct: false},
        {text: "wrong5-2", correct: false},
        {text: "wrong5-3", correct: false}
      ]
    },
    {
      question: "question6",
      answers: [
        {text: "correct6", correct: true},
        {text: "wrong6-1", correct: false},
        {text: "wrong6-2", correct: false},
        {text: "wrong6-3", correct: false}
      ]
    },

    ]
    quiz.questions = questions

    question = {
      question: "question1",
      answers: [
        {text: "correct1", correct: true},
        {text: "wrong1-1", correct: false},
        {text: "wrong1-2", correct: false},
        {text: "wrong1-3", correct: false}
      ]
    }
    correctAnswer = {text: "correct", correct: true}
    incorrectAnswer = {text: "correct", correct: false}
  })

  it("has a url", function(){
    assert.strictEqual("url", quiz.url);
  })  

  it("starts with no questions", function(){
    assert.strictEqual(0, emptyQuiz.questions.length);
  })

  it("can get questions by index", function(){
    assert.strictEqual(questions[2], quiz.questions[2]);
  })

  it("can return five random questions", function(){
    var firstFive = questions.slice(0, 4)
    var actual = quiz.randomiseArray(5, quiz.questions)
    assert.notDeepEqual(firstFive, actual)
    assert.strictEqual(5, actual.length)
  })

  it("won't infinite loop getting questions", function(){
    var actual = quiz.randomiseArray(10, quiz.questions)
    assert.strictEqual(6, actual.length)
  })

  it("starts with a score of 0", function(){
    assert.strictEqual(0, quiz.score)
  })

  it("increases score on true", function(){
    quiz.checkAnswer(correctAnswer, question)
    assert.strictEqual(1, quiz.score)
  })

  it("adds a question to answered questions", function(){
    quiz.checkAnswer(correctAnswer, question)
    assert.strictEqual(1, quiz.answeredQuestions.length)
  })

  it("doesn't increase score on false", function(){
    quiz.checkAnswer(incorrectAnswer, question)
    assert.strictEqual(0, quiz.score)
  })

  it("can't answer the same question twice", function(){
    quiz.checkAnswer(correctAnswer, question)
    quiz.checkAnswer(correctAnswer, question)
    assert.strictEqual(1, quiz.score)
  })

  it("can reset score", function(){
    quiz.checkAnswer(correctAnswer, question)
    quiz.reset()
    assert.strictEqual(0, quiz.score)
  })

  it("can reset answered questions", function(){
    quiz.checkAnswer(correctAnswer, question)
    quiz.reset()
    assert.strictEqual(0, quiz.answeredQuestions.length)
  })

})