const Product = require('../models/product');

exports.getShop = (_, res) => {
  let products;
  Product.fetchAll((data) => {
    products = data;
    res.render('public/shop', {
      products,
      pageTitle: 'Shop Page',
      hasProduct: products.length > 0,
    });
  });
};
exports.getCard = (_, res) => {
  res.render('public/cart', {
    pageTitle: 'Cart',
  });
};
exports.getProfile = (_, res) => {
  res.render('public/profile', {
    pageTitle: 'Profile',
  });
};
exports.getCheckout = (_, res) => {
  res.render('public/checkout', {
    pageTitle: 'Check Out',
  });
};
