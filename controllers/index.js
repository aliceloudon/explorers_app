var express = require("express")
var router = express.Router()
var path = require("path")

router.use("/api", require("./explorers_router.js"))

router.get("/", function(req,res){
  res.sendFile(path.join(__dirname + "/../client/index.html"))
})

module.exports = router