const express = require('express');
const path = require('path');
const rootDir = require('../utils/path.js');
const admin = require('./admin');
const router = express.Router();
const displayProducts = admin.products;
router.get('/', (_, res) => {
  console.log(displayProducts);
  res.render('shop', {
    products: displayProducts,
    pageTitle: 'Shop Page',
    hasProduct: displayProducts.length > 0,
  });
});

module.exports = router;
