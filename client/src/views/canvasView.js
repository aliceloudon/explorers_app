var CanvasView = function(canvas, context){
  this.canvas = canvas
  this.context = context
}

CanvasView.prototype = {

  render: function(){
    
    var self = this
    var circleSize = 25

    this.canvas.addEventListener('mousedown', function(e){

      self.canvas.onmousemove = function(event){
        var coords = self.canvas.getBoundingClientRect()
        self.drawCircle( (event.clientX - coords.left), (event.clientY - coords.top), circleSize )
      }
    })

    this.canvas.addEventListener('mouseup', function(e){
      self.canvas.onmousemove = null
    })

    var colourPicker = document.querySelector('#change-colour-input')
    colourPicker.onchange = function(){
      self.context.fillStyle = this.value
      self.context.strokeStyle = this.value
    }

    var brushSize = document.querySelector('#brush-size')
    brushSize.onchange = function() {
      console.log('changing')
      circleSize = this.value
    }

    var erase = document.querySelector('#erase-button')
    erase.onclick = function(){
      self.context.clearRect()
    } // It works but it goes to the top of the page

  },

  drawCircle: function(x, y, circleSize){
    this.context.beginPath()
    this.context.arc(x, y, circleSize, 0, Math.PI*2)
    this.context.fill()
    this.context.stroke()
  }

}

module.exports = CanvasView