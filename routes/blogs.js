const express = require('express');
const router = express.Router();
require('dotenv').config();
const eventController = require('../controller/blogs');

router.get('/getBlogs', eventController.blog_get);
router.post('/addBlog',eventController.addBlog);
router.put('/updateBlog',eventController.updateBlog);
router.delete('/deleteBlog',eventController.deleteBlog);


module.exports = router;