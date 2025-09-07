const express = require('express');
const router = express.Router();
const path = require('path');
const BlogPost = require('../lib/BlogPost');

let blogs = []

router.get('/', (req, res) => {
    res.render('home/index.ejs', {blogs: blogs});
});

// TEMPORARY REMOVE WITH MORE API ENDPOINTS
router.post('/api/blog', (req, res) => {
    const payload = req.body;
    if (payload) {
        let newBlog = new BlogPost(blogs.length, payload.author, payload.title, payload.content); 
        blogs.push(newBlog);
        res.status(201).json({message: "blog recieved successfully"});
    } else {
        res.status(400).json({message: "blog posted unsuccessfully"});
    }
});

router.delete('/api/blog/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    if (!isNaN(blogId)) {
        const blogIndex = blogs.findIndex(blog => blog.id === blogId);
        if (blogIndex !== -1){
            blogs.splice(blogIndex, 1); 
            res.status(200).json({message: `Blog ${blogId} successfully deleted`});
        } else {
            res.status(404).json({message: 'Blog not found'});
        }
    } else {
        res.status(400).json({message: 'Invalid blog ID'});
    }
});

module.exports = router;
