var TileGame = require("../models/tileGame")

var TileGameView = function(tileGameView, explorers){
  this.tileGameView = tileGameView
  this.tileGame = new TileGame(explorers)
}



TileGameView.prototype = {

  render: function(){
    
    this.tileGame.newBoard(this.tileGameView)
    // this.gameView.innerHTML = ''
    // var output = document.createElement('<ol>')
    // var li = document.createElement('li')
    // var img = document.createElement('img')

    // img.src = images[index]
    // document.getElementById("memory-game").appendChild(img)
    // li.appendChild(div)
    // this.gameView.appendChild(li)
    
  
  }

}

module.exports = TileGameView