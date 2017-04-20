var express = require("express")
var router = express.Router()
var path = require("path")

router.use("/api/explorers", require("./explorers_router.js"))

router.get("/", function(req,res){
  // res.sendFile(path.join(__dirname + "/../client/index.html"))

  res.json({data: "Testing server response"})
})

module.exports = router