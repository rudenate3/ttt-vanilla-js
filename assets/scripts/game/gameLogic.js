const BoardModel = require('./models/board')
const utils = require('../utils')

const pageObject = require('../pageObject')

let gameBoardInstance = {}
let gameEnded = true
let playerXTurn = true
let turnCount
let xWins = 0
let oWins = 0
let ties = 0 // TODO add tie ui
let games = 0

const resetGameState = function() {
  turnCount = 0
  playerXTurn = true
  gameEnded = false
}

const newGame = function () {
  games++ // May want to make this increment only in the case of a winner
  if (gameBoardInstance.board) {
    gameBoardInstance.removeClickHandlers()
  }
  gameBoardInstance = {}
  gameBoardInstance = new BoardModel()
  resetGameState()
}

const onWin = function (player) {
  gameEnded = true
  if (player === 'X') {
    xWins++
    pageObject.xWinsSpan.html(xWins)
  } else {
    oWins++
    pageObject.oWinsSpan.html(oWins)
  }
  alert('Player ' + player + ' have won the game')
}

const onTie = function () {
  gameEnded = true
  ties++
  pageObject.tiesSpan.html(ties)
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
