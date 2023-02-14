
const express = require('express')
const Router = express.Router()
const AuthController = require('../controllers/AuthController')

Router.get('/signup',AuthController.signup)
Router.get('/signin',AuthController.signin)




module.exports = Router