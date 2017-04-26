var TextInfoView = function(textInfoView){
  this.textInfoView = textInfoView
}

TextInfoView.prototype = {

  render: function(explorer){
    this.textInfoView.innerHTML = ''
    var title = document.createElement('h3')
    title.innerText = explorer.title + ' - ' + explorer.date
    this.textInfoView.appendChild(title)
    var textBox = document.createElement('p')
    textBox.innerHTML = explorer.info
    this.textInfoView.appendChild(textBox)
    this.textInfoView.className = 'text-info-view'
  }

}

module.exports = TextInfoView