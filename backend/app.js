//Express set up for node web server
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

//graphql setup
const expressGql = require('express-graphql');
const schema = require('./graphql/schemas');

//define routes later
//const databaseRoute = require('./routes/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Cross origin setup
//body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

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



app.use('/', express.static(path.join(__dirname, 'build')));

const eql = expressGql({
  schema,
  graphiql: true
});

console.log(eql);

//register graph ql with the express server
app.use('/graphql', eql);

//app.use('/api/database', databaseRoute);
console.log('hey');

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;