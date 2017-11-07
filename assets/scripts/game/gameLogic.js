const debug = require('../config').debug
const BoardModel = require('./models/board')

let gameBoardInstance = {}
let gameEnded = true
let playerXTurn = true
let turnCount

const newGame = function () {
  if (gameBoardInstance.board) {
    gameBoardInstance.removeClickHandlers()
  }
  gameBoardInstance = {}
  gameBoardInstance = new BoardModel()
  turnCount = 0
  playerXTurn = true
  gameEnded = false
}

const addMove = function (square, player) {
  square.val = player
  $('#' + square.id).html(player)
  if (gameBoardInstance.checkForWin(player)) {
    gameEnded = true
    alert('You have won the game')
  }
  if (turnCount === 8) {
    gameEnded = true
    alert('Tie game')
  }
  turnCount++
}

const onSquareClicked = function (square) {
  if (gameEnded) {
    alert('Game has ended')
    console.log('Game is over')
    return
  }
  if (square.val !== '') {
    console.error('Space Taken')
    return
  }
  playerXTurn ? addMove(square, 'X') : addMove(square, 'O')
  playerXTurn = !playerXTurn
}

module.exports = {
  newGame,
  onSquareClicked
}
