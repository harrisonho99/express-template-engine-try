const Product = require('../models/product');

exports.getShop = (_, res) => {
  let products;
  Product.fetchAll((data) => {
    products = data;
    res.render('shop', {
      products,
      pageTitle: 'Shop Page',
      hasProduct: products.length > 0,
    });
  });
};
exports.getCard = (_, res) => {
  res.render('cart', {
    pageTitle: 'Cart',
  });
};
exports.getProfile = (_, res) => {
  res.render('profile', {
    pageTitle: 'Profile',
  });
};
exports.getCheckout = (_, res) => {
  res.render('checkout', {
    pageTitle: 'Check Out',
  });
};
