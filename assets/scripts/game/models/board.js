const debug = require('../../config').debug

const BoardModel = function BoardModel () {
  if (debug) {
    console.log('Board Model Constructor Start')
  }
  this.winner = false
  this.playerXTurn = true
  this.board = []
  if (debug) {
    console.log(this)
  }
}

const checkAllSamePlayer = function (player, lineArray) {
  if (debug) {
    console.log('checkAllSamePlayer Start')
    console.log(player)
    console.log(lineArray)
  }
  if (player !== 'X' && player !== 'O') {
    console.error('Not a valid player')
    return
  }
  if (!Array.isArray(lineArray)) {
    console.error('Not an array')
    return
  }
  if (lineArray.every(square => square === player)) {
    return true
  }
  return false
}

BoardModel.prototype.endTurn = function () {
  if (debug) {
    console.log(this.playerXTurn ? 'X Turn End' : 'O Turn End')
  }
  this.playerXTurn = !this.playerXTurn
}

BoardModel.prototype.addClickHandlers = function () {
  if(debug) {
    console.log('Adding Click Handlers')
  }
  this.board.forEach((square) => {
    square.addClickHandler()
  })
}

BoardModel.prototype.removeClickHandlers = function () {
  this.board.forEach((square) => {
    square.removeClickHandler()
  })
}

BoardModel.prototype.checkForWin = function (player) {
  if (
    checkAllSamePlayer(player, [ // Top Row
      this.board[0].r0c0,
      this.board[1].r0c1,
      this.board[2].r0c2
    ]) ||
    checkAllSamePlayer(player, [ // Middle Row
      this.board.r1c0,
      this.board.r1c1,
      this.board.r1c2
    ]) ||
    checkAllSamePlayer(player, [ // Bottom Row
      this.board.r2c0,
      this.board.r2c1,
      this.board.r2c2
    ]) ||
    checkAllSamePlayer(player, [ // First Column
      this.board.r0c0,
      this.board.r1c0,
      this.board.r2c0
    ]) ||
    checkAllSamePlayer(player, [ // Second Column
      this.board.r0c1,
      this.board.r1c1,
      this.board.r2c1
    ]) ||
    checkAllSamePlayer(player, [ // Third Column
      this.board.r0c2,
      this.board.r1c2,
      this.board.r2c2
    ]) ||
    checkAllSamePlayer(player, [ // Diagonal Top-Left > Bottom-Right
      this.board.r0c0,
      this.board.r1c1,
      this.board.r2c2
    ]) ||
    checkAllSamePlayer(player, [ // Diagonal Bottom-Left > Top-Right
      this.board.r2c0,
      this.board.r1c1,
      this.board.r0c2
    ])
  ) {
    this.winner = true
    return true
  }
  return false
}

module.exports = BoardModel
