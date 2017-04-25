var CanvasView = function(canvas, context){
  this.canvas = canvas
  this.context = context
}

CanvasView.prototype = {

  render: function(){
    
    var self = this
    this.canvas.onclick = function(event){
      var coords = self.canvas.getBoundingClientRect()
      console.log(coords.left, coords.top)
      console.log(event.clientX, event.clientY)
      // self.drawRectangle( (event.clientX - coords.left), (event.clientY - coords.top) )
      self.drawCircle((event.clientX - coords.left), (event.clientY - coords.top))
    }

    // var tools = document.querySelectorAll('input')
    // tools.forEach(function(tool){
    //   tool.onclick = function{
    //     currentTool = this.value
    //     canvas.onclick = canvasClickHandler
    //   }
    // })

  },

  drawRectangle: function(x, y){
    this.context.fillStyle = 'orange'
    this.context.fillRect(x, y, 10, 10)
  },

  drawCircle: function(x, y){
    this.context.beginPath()
    this.context.arc(x, y, 10, 0, Math.PI*2)
    this.context.fillStyle = 'green'
    this.context.fill()
    this.context.strokeStyle = 'green'
    this.context.stroke()
  }

}

module.exports = CanvasView