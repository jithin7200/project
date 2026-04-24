const express = require('express')
const Router = express.Router()
const userController = require('../controllers/userController')

Router.post('/createUser',userController.registerUser)
Router.post('/loginUser',userController.login)

module.exports = Router