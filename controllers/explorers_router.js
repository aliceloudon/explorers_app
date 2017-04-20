var express = require("express")
var explorersRouter = express.Router()

explorersRouter.get("/", function(req,res){
  res.json({data: [{date: 1492, title: "timeline title", name: "Columbus", startcoord: {lat: 567657, lng: -2746868},endcoord: {lat: 567637, lng: -2746838}, info: "Sailed to West Indies but found America", picurl: "http://picurl" }]})
})

module.exports = explorersRouter