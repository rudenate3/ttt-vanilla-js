const utils = require('../../utils')

const SquareModel = function SquareModel (id) {
  utils.devLog(id + ' Square Model Constructor Start')
  this.id = id
  this.val = ''
}

SquareModel.prototype.addClickHandler = function () {
  utils.devLog(this.id + ' Click Handler Added')
  const gameLogic = require('../gameLogic')
  $('#' + this.id).on('click', (event) => {
    utils.devLog(this.id + ' Clicked')
    gameLogic.onSquareClicked(this)
  })
}

SquareModel.prototype.removeClickHandler = function () {
  utils.devLog(this.id + ' Click Handler Removed')
  $('#' + this.id).off('click')
}

module.exports = SquareModel
