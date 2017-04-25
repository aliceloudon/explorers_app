var TileGame = function(explorers, tileGameView){
  this.images = []
  explorers.forEach(function(explorer){
    this.images.push(explorer.image)
    this.images.push(explorer.image)
  }.bind(this))
  this.tiles = []
  this.memory_values = [];
  this.flipped_memory_tiles = [];
  this.tiles_flipped = 0;
  this.permanently_flipped_tiles = []
  this.tileGameView = null
}

TileGame.prototype = {

  memory_tile_shuffle: function(){
    var i = this.images.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random() * (i+1));
      temp = this.images[j];
      this.images[j] = this.images[i];
      this.images[i] = temp;
    }
  },

  newBoard: function(tileGameView){
    this.tileGameView = tileGameView
    this.tileGameView.innerHTML = ""
    this.tiles_flipped = 0;
    this.permanently_flipped_tiles = []
    this.tiles = []
    this.memory_tile_shuffle();
    for(var i = 0; i < this.images.length; i++){
      var img = document.createElement('img')
      img.id = "tile_" + i
      img.className = "tile"
      img.src = "http://is5.mzstatic.com/image/thumb/Purple30/v4/86/18/5d/86185d80-b6b4-dc11-f72d-772eb950a35c/source/1200x630bb.jpg"
      var self = this
      var onClick = function(){
        self.memoryFlipTile(this)
      }
      img.addEventListener('click', onClick)
      tileGameView.appendChild(img)
      this.tiles.push(img)
      // output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+this.images[i]+'\')"></div>'
    }
    // document.getElementById('memory-game').innerHTML = output;

  },

  memoryFlipTile: function(tile){
    var self = this
    var index = this.tiles.indexOf(tile)
    var tileSrc = this.images[index]
    
    if(this.permanently_flipped_tiles.includes(tile)){
      return
    }

    tile.src = tileSrc
      if(this.memory_values.length == 0){
        this.memory_values.push(tileSrc);
        this.flipped_memory_tiles.push(tile);
      }else if(this.memory_values.length == 1){
        this.memory_values.push(tileSrc);
        this.flipped_memory_tiles.push(tile);
        if(this.memory_values[0] == this.memory_values[1]){
          this.tiles_flipped += 2;
          // Clear both arrays
          this.memory_values = [];
          this.permanently_flipped_tiles.push(this.flipped_memory_tiles[0])
          this.permanently_flipped_tiles.push(this.flipped_memory_tiles[1])
          this.flipped_memory_tiles = [];
          // Check to see if the whole board is cleared
          if(this.tiles_flipped == this.images.length){
            alert("You win!");
            this.newBoard(this.tileGameView);
          }
        } else {
          function flipTileToBack(){
            // Flip the 2 tiles back over
            var tile_1 = self.flipped_memory_tiles[0]
            var tile_2 = self.flipped_memory_tiles[1]
            tile_1.src = 'http://is5.mzstatic.com/image/thumb/Purple30/v4/86/18/5d/86185d80-b6b4-dc11-f72d-772eb950a35c/source/1200x630bb.jpg';
            tile_2.src = 'http://is5.mzstatic.com/image/thumb/Purple30/v4/86/18/5d/86185d80-b6b4-dc11-f72d-772eb950a35c/source/1200x630bb.jpg';
            // Clear both arrays
            self.memory_values = [];
            self.flipped_memory_tiles = [];
          }
        setTimeout(flipTileToBack, 700);
      }
    }
  }
}

module.exports = TileGame
