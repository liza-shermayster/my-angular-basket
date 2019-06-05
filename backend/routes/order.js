const express = require('express');
const orderSchema = require('../models/order');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");


router.post('/order', checkAuth,
  (req, res, next) => {
    const order = new orderSchema({
      user: req.body.user,
      menuItems: req.body.menuItems,
      total: req.body.total,
      creator: req.userDataEmailId.userId
    });


    console.log('order', order);
    order.save()
      .then(result => {
        res.status(201).json({
          message: 'Order saved',
          result: result
        })

      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });

router.get('/getOrder', checkAuth,
  (req, res, next) => {
    console.log(res);
    orderSchema.find().then(documents => {
      console.log(document);
      res.status(200).json({
        message: 'Orders fetched successfully',
        order: documents
      });
    });
  });
module.exports = router;
