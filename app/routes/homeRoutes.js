const express = require('express');
const router = express.Router();
const path = require('path');
const BlogPost = require('../lib/BlogPost');

router.get('/', (req, res) => {
    console.log(post);
    res.render('home/index.ejs');
});

module.exports = router;
