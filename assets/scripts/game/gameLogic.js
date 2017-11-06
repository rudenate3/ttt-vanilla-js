const gameBoardContainer = $('#game-board-container')

const dimension = 3

const createBoard = function() {
  let boardHtml = '<table>'
  for (let row = 0; row < dimension; row++) {
    boardHtml += '<tr>'
    for (let column = 0; column < dimension; column++) {
      boardHtml += '<td id="r' + row + 'c' + column + '" class="square"></td>'
    }
    boardHtml += '</tr>'
  }
  boardHtml += '</table>'
  gameBoardContainer.html(boardHtml)
}

module.exports = {
  createBoard
}
