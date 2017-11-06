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
  $('#' + this.id).on('click', (event) => {
    if (debug) {
      console.log(this.id + ' Clicked')
    }
  })
}

SquareModel.prototype.removeClickHandler = function() {
  $('#' + this.id).off('click', (event) => {
    if (debug) {
      console.log(this.id + ' Click Handler Removed')
    }
  })
}

module.exports = SquareModel
