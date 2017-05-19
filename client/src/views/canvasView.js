var CanvasView = function(canvas, context){
  this.canvas = canvas
  this.context = context
  this.template = 'design-images/canvas/Abel-Tasman.png'
  this.colour = null
}

CanvasView.prototype = {

  render: function(){

    var self = this
    var circleSize = 25

    this.canvas.addEventListener('mousedown', function(e){
      self.canvas.onmousemove = function(event){
        var coords = self.canvas.getBoundingClientRect()
        self.drawCircle( (event.clientX - coords.left), (event.clientY - coords.top), circleSize )
        self.drawImage(self.template)
      }
    })

    this.canvas.addEventListener('mouseup', function(e){
      self.canvas.onmousemove = null
    })

    var colourPicker = document.querySelector('#change-colour-input')
    colourPicker.onchange = function(){
      self.colour = this.value
      self.context.fillStyle = self.colour
      self.context.strokeStyle = self.colour
    }

    var brushSize = document.querySelector('#brush-size')
    brushSize.onchange = function() {
      console.log('changing')
      circleSize = this.value
    }

    var erase = document.querySelector('#erase-button')
    erase.onclick = function(){
      self.drawRectangle()
      this.drawRectangle(this.template)
    }

    var templateButtons = document.querySelectorAll('.template-button')
    templateButtons[0].onclick = function(){
      self.template = 'design-images/canvas/Abel-Tasman.png'
      self.drawRectangle()
      self.drawImage(self.template)
    }
    templateButtons[1].onclick = function(){
      self.template = 'design-images/canvas/Erik-the-Red.png'
      self.drawRectangle()
      self.drawImage(self.template)
    }
    templateButtons[2].onclick = function(){
      self.template = 'design-images/canvas/Marco-Polo.png'
      self.drawRectangle()
      self.drawImage(self.template)
    }
    templateButtons[3].onclick = function(){
      self.template = 'design-images/canvas/Neil-Armstrong.png'
      self.drawRectangle()
      self.drawImage(self.template)
    }

    this.drawImage(this.template)

  },

  drawCircle: function(x, y, circleSize){
    this.context.beginPath()
    this.context.arc(x, y, circleSize, 0, Math.PI*2)
    this.context.fill()
    this.context.stroke()
  },

  drawRectangle: function(){

    this.context.fillStyle = 'white'
    this.context.fillRect(0, 0, 389, 500)
    if(this.colour){
      this.context.fillStyle = this.colour
    } else {
      this.context.fillStyle = 'black'
    }
    
  },

  drawImage: function(srcString){
    var img = document.createElement('img')
    img.src = srcString
    var self = this
    img.onload = function(){
      self.context.drawImage(img, 0, 0, 389, 500)
    }
  }

}

module.exports = CanvasView