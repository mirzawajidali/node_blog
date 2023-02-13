const express = require('express')
const Router = express.Router()
const PostController = require('../controllers/PostController')

Router.post('/create',PostController.create);
Router.get('/',PostController.show)





module.exports = Router