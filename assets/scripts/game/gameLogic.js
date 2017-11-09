const BoardModel = require('./models/board')
const utils = require('../utils')

let gameBoardInstance = {}
let gameEnded = true
let playerXTurn = true
let turnCount

const resetGameState = function() {
  turnCount = 0
  playerXTurn = true
  gameEnded = false
}

const newGame = function () {
  if (gameBoardInstance.board) {
    gameBoardInstance.removeClickHandlers()
  }
  gameBoardInstance = {}
  gameBoardInstance = new BoardModel()
  resetGameState()
}

const onWin = function (player) {
  gameEnded = true
  alert('Player ' + player + ' have won the game')
}

const onTie = function () {
  gameEnded = true
  alert('Tie game')
}

const addMove = function (square, player) {
  square.val = player
  $('#' + square.id).html(player)
  if (gameBoardInstance.checkForWin(player)) {
    onWin(player)
  } else if (turnCount === 8) {
    onTie()
  }
  turnCount++
}

const onSquareClicked = function (square) {
  if (gameEnded) {
    alert('Game has ended') // TODO refactor to html representation
    utils.devLog('Game is over')
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
