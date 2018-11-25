//Express set up for node web server
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

//define routes later

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Cross origin setup
//body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/', express.static(path,join(__dirname, 'dist')));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = app;