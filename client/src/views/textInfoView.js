var TextInfoView = function(textInfoView){
  this.textInfoView = textInfoView
}

TextInfoView.prototype = {

  render: function(explorer){
    this.textInfoView.innerHTML = ''
    var textBox = document.createElement('info-text')
    textBox.innerHTML = explorer.info
    this.textInfoView.appendChild(textBox)
  }

}

module.exports = TextInfoView