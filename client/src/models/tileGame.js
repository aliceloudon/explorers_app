// var game_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L']
// var game_values = []
// var tiles_id = []
// var flipped_tiles = []


// function newGame(){
//   flipped_tiles = 0
//   game_array = _.shuffle(game_array)
//   var output = ''
//   forEach(game_array, function(game_array_value, index){
//     output += '<div id="tile_' + index +'" onclick="memoryFlipTile(this,' + game_array_value + ')"></div>'
//   })
//   document.getElementById('memory-game').innerHTML = output
// }



module.exports = tileGame
