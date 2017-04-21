var express = require("express")
var explorersRouter = express.Router()

var ExplorersQuery = require("../db/explorers_query")
var explorersQuery = new ExplorersQuery()

explorersRouter.get("/", function(req,res){
  explorersQuery.all(function(docs){
    res.json(docs)
  })
})

module.exports = explorersRouter