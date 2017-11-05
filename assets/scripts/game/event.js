const gameApi = require('./api')
const gameUi = require('./ui')
const gameLogic = require('./gameLogic')

const onNewGame = function(event) {
  event.preventDefault()
  gameLogic.createBoard()
}

module.exports = {
  onNewGame
}
