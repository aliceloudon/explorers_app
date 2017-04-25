var CanvasView = function(canvas, context){
  this.canvas = canvas
  this.context = context
}

CanvasView.prototype = {

  render: function(){
    
    var self = this

    this.canvas.onclick = function(event){
      var coords = self.canvas.getBoundingClientRect()
      // self.drawRectangle( (event.clientX - coords.left), (event.clientY - coords.top) )
      self.drawCircle( (event.clientX - coords.left), (event.clientY - coords.top) )
    }

    var colourPicker = document.querySelector('#change-colour-input')
    colourPicker.onchange = function(){
      self.context.fillStyle = this.value
      self.context.strokeStyle = this.value
    }

  },

  // drawRectangle: function(x, y, strokeColour){
  //   this.context.strokeStyle = strokeColour
  //   this.context.fillRect(x, y, 10, 10)
  // },

  drawCircle: function(x, y){
    this.context.beginPath()
    this.context.arc(x, y, 10, 0, Math.PI*2)
    // this.context.fillStyle = 'green'
    this.context.fill()
    // this.context.strokeStyle = 'green'
    this.context.stroke()
  }

}

module.exports = CanvasView