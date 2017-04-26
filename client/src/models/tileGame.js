var TileGame = function(explorers, tileGameView){
  // set arrays to hold values as they change
  this.images = []
  explorers.forEach(function(explorer){
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

// Shuffles an array
  shuffleArray: function(array){
    var i = array.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random() * (i+1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    } 
    return array
  },

  memory_tile_shuffle: function(){
    var selectedImages = []
    var shuffledImages = this.shuffleArray(this.images)

    for (var i = 0; i < 6; i++){
      selectedImages.push(shuffledImages[i])
      selectedImages.push(shuffledImages[i])
    }

    this.shuffleArray(selectedImages)
    this.images = selectedImages
  },

  newBoard: function(tileGameView){
    this.tileGameView = tileGameView
    this.tileGameView.innerHTML = ""
    this.tiles_flipped = 0;

    // array to hold tiles that have been matched during the game
    this.permanently_flipped_tiles = []
    this.tiles = []
    this.memory_tile_shuffle();

    // setting tiles to have a single background
    for(var i = 0; i < this.images.length; i++){
      var img = document.createElement('img')
      img.id = "tile_" + i
      img.className = "tile"
      img.src = "http://is5.mzstatic.com/image/thumb/Purple30/v4/86/18/5d/86185d80-b6b4-dc11-f72d-772eb950a35c/source/1200x630bb.jpg"
      
      // 'this' workaround
      var self = this
      var onClick = function(){
        // call turn over tile function
        self.memoryFlipTile(this)
      }
      // set event listener to each tile
      img.addEventListener('click', onClick)
      tileGameView.appendChild(img)
      this.tiles.push(img)
     
    }
   

  },

  memoryFlipTile: function(tile){
    var self = this
    var index = this.tiles.indexOf(tile)
    var tileSrc = this.images[index]


    // catch so that matched tiles do not flip over
    if(this.permanently_flipped_tiles.includes(tile)){
      return
    }

    // set tiles to have background from explorer seeds file
    tile.src = tileSrc

    // add currently clicked tile to working 'memory_values' array
      if(this.memory_values.length == 0){
        this.memory_values.push(tileSrc);
        this.flipped_memory_tiles.push(tile);
      }else if(this.memory_values.length == 1){
        this.memory_values.push(tileSrc);
        this.flipped_memory_tiles.push(tile);

        // do the two stored tiles match?
        if(this.memory_values[0] == this.memory_values[1]){
          this.tiles_flipped += 2;
         
          this.memory_values = [];
          this.permanently_flipped_tiles.push(this.flipped_memory_tiles[0])
          this.permanently_flipped_tiles.push(this.flipped_memory_tiles[1])
          this.flipped_memory_tiles = [];

          // once the game is complete and all tiles are matched
          if(this.tiles_flipped == this.images.length){

            var tileGameWindow = document.getElementById("tileGame-window")
            var closeGameButton = document.getElementById("close-game")
            
            // tile window becomes visible
            tileGameWindow.style.display = "block"
            document.getElementById('audio1').play();

            closeGameButton.addEventListener('click', function(){
              tileGameWindow.style.display = "none"
            })

            window.onclick = function(event) {
                if (event.target == tileGameWindow) {
                    tileGameWindow.style.display = "none";
                }
            }
            
            this.newBoard(this.tileGameView);
          }
        } else {
          // if no match flip tiles back
          function flipTileToBack(){
            
            var tile_1 = self.flipped_memory_tiles[0]
            var tile_2 = self.flipped_memory_tiles[1]
            tile_1.src = 'http://is5.mzstatic.com/image/thumb/Purple30/v4/86/18/5d/86185d80-b6b4-dc11-f72d-772eb950a35c/source/1200x630bb.jpg';
            tile_2.src = 'http://is5.mzstatic.com/image/thumb/Purple30/v4/86/18/5d/86185d80-b6b4-dc11-f72d-772eb950a35c/source/1200x630bb.jpg';
           
            self.memory_values = [];
            self.flipped_memory_tiles = [];
          }
        setTimeout(flipTileToBack, 700);
      }
    }
  }
}

module.exports = TileGame
