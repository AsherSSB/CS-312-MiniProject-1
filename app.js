const express = require("express");
const path = require("path");
const app = express();

const homeRoutes = require("./app/routes/homeRoutes");

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use('/', homeRoutes);

module.exports = app;
