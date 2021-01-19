const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
router.get('/profile', productController.getProfile);
module.exports = router;
