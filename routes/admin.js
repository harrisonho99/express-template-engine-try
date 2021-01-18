const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
router.get('/add-product', productController.addProduct);
router.post('/add-product', productController.postProduct);

exports.router = router;
