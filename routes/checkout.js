const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
router.get('/checkout', productController.getCheckout);
module.exports = router;
