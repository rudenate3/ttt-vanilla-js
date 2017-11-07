const debug = require('../../config').debug
const SquareModel = require('./square')

const gameBoardContainer = $('#game-board-container') // TODO abstract to PO

const dimension = 3

const BoardModel = function BoardModel () {
  if (debug) {
    console.log('Board Model Constructor Start')
  }
  this.board = []
  if (debug) {
    console.log(this)
  }
  this.createBoard()
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

BoardModel.prototype.createBoard = function () {
  if (debug) {
    console.log('Creating Board')
  }
  let boardHtml = '<table>'
  for (let row = 0; row < dimension; row++) {
    boardHtml += '<tr>'
    for (let column = 0; column < dimension; column++) {
      const squareId = 'r' + row + 'c' + column
      boardHtml += '<td id="' + squareId + '" class="square"></td>'
      this.board.push(new SquareModel(squareId))
    }
    boardHtml += '</tr>'
  }
  boardHtml += '</table>'
  gameBoardContainer.html(boardHtml)
  this.addClickHandlers()
}

BoardModel.prototype.addClickHandlers = function () {
  if (debug) {
    console.log('Adding Click Handlers')
  }
  this.board.forEach((square) => {
    square.addClickHandler()
  })
}

BoardModel.prototype.removeClickHandlers = function () {
  if (debug) {
    console.log('Removing Click Handlers')
  }
  this.board.forEach((square) => {
    square.removeClickHandler()
  })
}

BoardModel.prototype.checkForWin = function (player) { // TODO update to use Square Model
  if (
    checkAllSamePlayer(player, [ // Top Row
      this.board[0].val,
      this.board[1].val,
      this.board[2].val
    ]) ||
    checkAllSamePlayer(player, [ // Middle Row
      this.board[3].val,
      this.board[4].val,
      this.board[5].val
    ]) ||
    checkAllSamePlayer(player, [ // Bottom Row
      this.board[6].val,
      this.board[7].val,
      this.board[8].val
    ]) ||
    checkAllSamePlayer(player, [ // First Column
      this.board[0].val,
      this.board[3].val,
      this.board[6].val
    ]) ||
    checkAllSamePlayer(player, [ // Second Column
      this.board[1].val,
      this.board[4].val,
      this.board[7].val
    ]) ||
    checkAllSamePlayer(player, [ // Third Column
      this.board[2].val,
      this.board[5].val,
      this.board[8].val
    ]) ||
    checkAllSamePlayer(player, [ // Diagonal Top-Left > Bottom-Right
      this.board[0].val,
      this.board[4].val,
      this.board[8].val
    ]) ||
    checkAllSamePlayer(player, [ // Diagonal Bottom-Left > Top-Right
      this.board[6].val,
      this.board[4].val,
      this.board[2].val
    ])
  ) {
    return true
  }
  return false
}

module.exports = BoardModel
