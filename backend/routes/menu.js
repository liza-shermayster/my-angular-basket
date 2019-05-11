const express = require('express');
const menuItemsSchema = require('../models/menuDB');
const router = express.Router();

router.post('/api/menuItems', (req, res, next) => {
  console.log("request title", req.body.title);

  const menuItem = new menuItemsSchema({
    title: req.body.title, price: req.body.price, img: 'assets/img/apple-1589869_640.jpg'
  });
  menuItem.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});
// let menuItem = new menuItemsSchema(
//   { title: 'apple', price: 1, img: 'assets/img/apple-1589869_640.jpg' }
//   // { title: 'banana', price: 2, img: 'assets/img/apple-1589869_640.jpg' },
//   // { title: 'mango', price: 3, img: 'assets/img/apple-1589869_640.jpg' },
//   // { title: 'avocado', price: 4, img: 'assets/img/apple-1589869_640.jpg' },
//   // { title: 'blueberries', price: 5, img: 'assets/img/apple-1589869_640.jpg' }
// );

// menuItem.save(function (err) {
//   if (err) {
//     console.log(err);
//   }
// });
router.get('/api/menu', (req, res, next) => {
  menuItemsSchema.find().then(documents => {
    res.status(200).json({
      message: 'Posts fetched successfully!',
      menuItems: documents
    });
  });
});
module.exports = router;
