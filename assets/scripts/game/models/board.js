const BoardModel = function BoardModel () {
  this.winner = false
  this.playerATurn = true
  this.board = {}
  this.board.r0c0 = ''
  this.board.r0c1 = ''
  this.board.r0c2 = ''
  this.board.r1c0 = ''
  this.board.r1c1 = ''
  this.board.r1c2 = ''
  this.board.r2c0 = ''
  this.board.r2c1 = ''
  this.board.r2c2 = ''
}

const checkAllSamePlayer = function (player, lineArray) {
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
  this.playerATurn = !this.playerATurn
}

BoardModel.prototype.checkForWin = function (player) {
  if (
    checkAllSamePlayer(player, [ // Top Row
      this.board.r0c0,
      this.board.r0c1,
      this.board.r0c2
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
