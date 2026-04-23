const express = require('express')
const Router = express.Router()
const BlogController = require('../controllers/blogController')

Router.post('/createblog',BlogController.CreatBlog)
Router.get('/allposts',BlogController.getPosts)
Router.put('/updatedpost/:id',BlogController.updatPost)
Router.delete('/deletepost/:id',BlogController.deletePost)
Router.get('/searchpost/:id',BlogController.searchPost)


module.exports = Router 