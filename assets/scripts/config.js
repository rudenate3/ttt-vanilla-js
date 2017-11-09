'use strict'

const config = {
  apiOrigins: {
    development: 'http://tic-tac-toe.wdibos.com',
    production: 'https://aqueous-atoll-85096.herokuapp.com'
  },
  env: 'development'
}

config.apiOrigin = function () {
  if (this.env === 'development') {
    return this.apiOrigins.development
  } else if (this.env === 'production') {
    return this.apiOrigins.production
  } else {
    console.error('Wrong env set in config.js')
  }
}

module.exports = config
