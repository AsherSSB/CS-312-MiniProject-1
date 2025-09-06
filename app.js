const express = require('express');
const path = require('path');
const app = express();

const homeRoutes = require('./app/routes/homeRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

app.use('/', homeRoutes);
app.use(express.static(path.join(__dirname, 'static')));

module.exports = app;
