

// TRYING TO REFACTOR SO THAT TILEGAME USES A RECOGNISED STRUCTURE
// IT DOESN'T SO FAR
// I HAVE ATTEMPTED TO REFACTOR UP TO THIS POINT - MANY CONFLICTS BELOW WHERE OLD STRUCTURE IS REFERENCED

var images = [
    ("images/1"),
    ("images/2"),
    ("images/3"),
    ("images/4"),
    ("images/5"),
    ("images/6"),
    ("images/7"),
    ("images/8"),
    ("images/9"),
    ("images/0")
];

var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
        tiles_flipped = 0;
        var output = '';
    images.memory_tile_shuffle();
        for(var i = 0; i < images.length; i++){
                output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+images[i]+'\')"></div>';
        }
        document.getElementById('memory-game').innerHTML = output;
}
function memoryFlipTile(tile,val){
        if(tile.innerHTML == "" && memory_values.length < 2){
                tile.style.background = '#FFF';
                tile.innerHTML = val;
                if(memory_values.length == 0){
                        memory_values.push(val);
                        memory_tile_ids.push(tile.id);
                } else if(memory_values.length == 1){
                        memory_values.push(val);
                        memory_tile_ids.push(tile.id);
                        if(memory_values[0] == memory_values[1]){
                                tiles_flipped += 2;
                                // Clear both arrays
                                memory_values = [];
                memory_tile_ids = [];
                                // Check to see if the whole board is cleared
                                if(tiles_flipped == images.length){
                                        alert("You win!");
                                        document.getElementById('memory_board').innerHTML = "";
                                        newBoard();
                                }
                        } else {
                                function flip2Back(){
                                    // Flip the 2 tiles back over
                                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                                    tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
                    tile_1.innerHTML = "";
                                    tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
                    tile_2.innerHTML = "";
                                    // Clear both arrays
                                    memory_values = [];
                    memory_tile_ids = [];
                                }
                                setTimeout(flip2Back, 700);
                        }
                }
        }
}

module.exports = tileGame
