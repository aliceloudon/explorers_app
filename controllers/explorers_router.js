var express = require("express")
var explorersRouter = express.Router()

var ExplorersQuery = require("../db/explorers_query")
var explorersQuery = new ExplorersQuery()

explorersRouter.get("/explorers", function(req,res){
  explorersQuery.allExplorers(function(docs){
    res.json(docs)
  })
})

explorersRouter.get("/quiz", function(req,res){
  explorersQuery.allQuestions(function(docs){
    res.json({question: "who climbed everest?"})
  })
})

module.exports = explorersRouter