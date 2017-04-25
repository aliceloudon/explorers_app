var TileGame = require("../models/tileGame")

var TileGameView = function(tileGameView, explorers){
  this.tileGameView = tileGameView
  this.tileGame = new TileGame(explorers)
}



TileGameView.prototype = {

  render: function(){
    
    this.tileGame.newBoard(this.tileGameView)
    
    
  
  }

}

module.exports = TileGameView