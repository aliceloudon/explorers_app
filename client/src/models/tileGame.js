var images = [];

// get images, place them in an array & randomize the order
for (var i = 0; i < 8; i++) { 
  var rand = Math.floor(Math.random() * (1200 - 900 + 1) + 900); 
  var img = 'http://lolcat.com/images/lolcats/' + rand + '.jpg';
  images.push(img);
  images.push(img);
}
randomizeImages();

var game_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L']
var game_values = []
var tiles_id = []
var flipped_tiles = []


function newGame(){
  flipped_tiles = 0
  game_array = _.shuffle(game_array)
  var output = ''
  _forEach(game_array, function(game_array_value, index){
    output += '<div id="tile_' + index +'" onclick="memoryFlipTile(this,\'' + game_array_value + '\')"></div>'
  })
  document.getElementById('memory-game').innerHTML = output
}

module.exports = tileGame
