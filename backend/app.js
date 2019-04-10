const express = require('express');
const bodyParser = require("body-parser");

const app = express();
//cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,DELETE,OPTIONS"
  );
  next();
})
// app.use(bodyParser.json());



app.use('/api/menu', (req, res, next) => {
  const menu = {
    apple: { title: 'apple', price: 1, img: 'assets/img/apple-1589869_640.jpg' },
    banana: { title: 'banana', price: 2, img: 'assets/img/banana.jpg' },
    mango: { title: 'mango', price: 3, img: 'assets/img/apple-1589869_640.jpg' },
    avocado: { title: 'avocado', price: 4, img: 'assets/img/apple-1589869_640.jpg' },
    blueberries: { title: 'blueberries', price: 5, img: 'assets/img/apple-1589869_640.jpg' },
  };
  res.json(menu);
});

module.exports = app;
