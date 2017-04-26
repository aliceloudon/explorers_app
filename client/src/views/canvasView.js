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
      self.drawRectangle()
    } // It works but it goes to the top of the page

    var templateButtons = document.querySelectorAll('.template-button')
    templateButtons[0].onclick = function(){
      self.drawRectangle()
      self.drawImage('design-images/canvas/Abel-Tasman.png')
    }
    templateButtons[1].onclick = function(){
      self.drawRectangle()
      self.drawImage('design-images/canvas/Erik-the-Red.png')
    }
    templateButtons[2].onclick = function(){
      self.drawRectangle()
      self.drawImage('design-images/canvas/Marco-Polo.png')
    }
    templateButtons[3].onclick = function(){
      self.drawRectangle()
      self.drawImage('design-images/canvas/Neil-Armstrong.png')
    }

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
    this.context.fillStyle = 'black'
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