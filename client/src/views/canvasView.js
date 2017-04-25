var CanvasView = function(canvas, context){
  this.canvas = canvas
  this.context = context
}

CanvasView.prototype = {

  render: function(){
    this.context.fillStyle = 'pink'
    this.context.fillRect(10, 10, 50, 50)

    this.canvas.onclick = function(event){
      console.log('clicked', event)
    }
  }

  // onclick: function(event){
  //   console.log('Location:', event.x, event.y)
  //   drawCircle(event.x, event.y)
  //   drawSmallCircle(event.x, event.y)
  // },

  // onmousemove: function(event){
  //   console.log('Location:', event.x, event.y)
  //   // drawCircle(event.x, event.y)
  //   drawSmallCircle(event.x, event.y)
  // }

}

module.exports = CanvasView