const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// const menuItemsSchema = require('./models/menuDB')

const userRouters = require("./routes/user");
const menuRouters = require("./routes/menu");

const app = express();



mongoose.connect('mongodb+srv://lizaWrite:****.mongodb.net/node-angular?retryWrites=true')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.log('Connection failed!', err);

  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());

//cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,DELETE,OPTIONS"
  );
  next();
});


app.use('/api/user', userRouters);
app.use('/api/menuItems', menuRouters);

module.exports = app;

/////////////liza-ilay/brdHyKTJNWfUBb5@cluster0-eb692//
