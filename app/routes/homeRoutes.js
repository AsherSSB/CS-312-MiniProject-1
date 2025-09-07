const express = require('express');
const router = express.Router();
const path = require('path');
const BlogPost = require('../lib/BlogPost');

let blogs = []

router.get('/', (req, res) => {
    res.render('home/index.ejs', {blogs: blogs});
});

// TEMPORARY REMOVE WITH MORE API ENDPOINTS
router.post('/api/post-blog', (req, res) => {
    const payload = req.body;
    if (payload) {
        let newBlog = new BlogPost(payload.author, payload.title, payload.content); 
        blogs.push(newBlog);
        res.status(200).json({message: "blog recieved successfully"});
    } else {
        res.status(400).json({message: "blog posted unsuccessfully"});
    }
});

module.exports = router;
