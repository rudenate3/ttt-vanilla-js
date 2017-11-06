const debug = require('../config').debug
const BoardModel = require('./models/board')
const SquareModel = require('./models/square')

const gameBoardContainer = $('#game-board-container')

const dimension = 3

const createBoard = function () {
  if (debug) {
    console.log('Creating Board')
  }
  const boardInstance = new BoardModel()
  let boardHtml = '<table>'
  for (let row = 0; row < dimension; row++) {
    boardHtml += '<tr>'
    for (let column = 0; column < dimension; column++) {
      const squareId = 'r' + row + 'c' + column
      boardHtml += '<td id="' + squareId + '" class="square"></td>'
      boardInstance.board.push(new SquareModel(squareId))
    }
    boardHtml += '</tr>'
  }
  boardHtml += '</table>'
  gameBoardContainer.html(boardHtml)
  boardInstance.addClickHandlers()
}

module.exports = {
  createBoard
}
