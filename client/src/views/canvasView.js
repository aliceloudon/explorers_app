var CanvasView = function(canvas, context){
  this.canvas = canvas
  this.context = context
}

CanvasView.prototype = {

  render: function(){
    var self = this
    this.canvas.onclick = function(event){
      var coords = self.canvas.getBoundingClientRect()
      console.log(event.clientX, event.clientY)
      self.drawRectangle(event.clientX, (event.clientY-coords.top))
    }
  },

  drawRectangle: function(x, y){
    this.context.fillStyle = 'red'
    this.context.fillRect(x, y, 40, 40)
  },

  // drawCircle: function(x, y){
  //   this.context.beginPath()
  //   this.context.arc(x, y, 5, 0, Math.PI*2, true)
  //   this.context.stroke()
  // }

}

module.exports = CanvasView