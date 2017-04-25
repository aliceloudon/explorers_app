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

    var erase = document.querySelector('#erase-button')
    erase.onclick = function(){
      self.context.clearRect(0, 0, w, h)
    } // It works but it goes to the top of the page

  },

  // drawRectangle: function(x, y, strokeColour){
  //   this.context.strokeStyle = strokeColour
  //   this.context.fillRect(x, y, 10, 10)
  // },

  drawCircle: function(x, y){
    this.context.beginPath()
    this.context.arc(x, y, 10, 0, Math.PI*2)
    this.context.fill()
    this.context.stroke()
  }

  // canvas.onmousemove = function(event){
  //   console.log('Location:', event.x, event.y)
  //   // drawCircle(event.x, event.y)
  //   drawSmallCircle(event.x, event.y)
  // }

}

module.exports = CanvasView