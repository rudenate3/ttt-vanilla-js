const debug = require('../../config').debug

const SquareModel = function SquareModel (id) {
  if (debug) {
    console.log(id + ' Square Model Constructor Start')
  }
  this.id = id
  this.val = ''
}

SquareModel.prototype.addClickHandler = function() {
  if (debug) {
    console.log(this.id + ' Click Handler Added')
  }
  const gameLogic = require('../gameLogic')
  $('#' + this.id).on('click', (event) => {
    if (debug) {
      console.log(this.id + ' Clicked')
    }
    gameLogic.onSquareClicked(this)
  })
}

SquareModel.prototype.removeClickHandler = function() {
  if (debug) {
    console.log(this.id + ' Click Handler Removed')
  }
  $('#' + this.id).off('click')
}

module.exports = SquareModel
