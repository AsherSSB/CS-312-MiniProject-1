const express = require('express');
const router = express.Router();
const path = require('path');
const BlogPost = require('../lib/BlogPost');

blogs = []

router.get('/', (req, res) => {
    res.render('home/index.ejs', {blogs: blogs});
});

module.exports = router;
