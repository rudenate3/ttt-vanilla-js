const config = require('./config')

const utils = {}

utils.devLog = function (log, file, line) { // Is there a better place for this?
  if (config.env === 'development') {
    if (file && line) {
      console.log('Ran on line ' + line + ' of file ' + file)
    }
    console.log(log)
    console.log('====================================')
  }
}

module.exports = utils
