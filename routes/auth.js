
const express = require('express')
const Router = express.Router()
const AuthController = require('../controllers/AuthController')

Router.get('/signup',AuthController.signup)
Router.post('/register',AuthController.register)
Router.get('/signin',AuthController.signin)
Router.post('/signedin',AuthController.signedin)




module.exports = Router