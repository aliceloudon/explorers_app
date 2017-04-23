use explorers
db.dropDatabase()

db.questions.insert([
  {
    question: "Who was the first person to climb Mount Everest?",
    answers: [
      {text: "Edumnd Hillary", correct: true},
      {text: "Ernest Shakleton", correct: false},
      {text: "Roald Amundsen", correct: false},
      {text: "David Livingstone", correct: false}
    ]
  }

])