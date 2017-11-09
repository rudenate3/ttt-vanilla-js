'use strict'

const store = require('../store')
const utils = require('../utils')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  utils.devLog(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  console.error(error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  utils.devLog('signIn success ran. data is :', response)
  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  utils.devLog('signIn failure ran. error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  utils.devLog('signOut success ran. and nothing was returned')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  utils.devLog('signOut failure ran. error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  utils.devLog('changePassword success ran. and nothing was returned')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  utils.devLog('changePassword failure ran. error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
