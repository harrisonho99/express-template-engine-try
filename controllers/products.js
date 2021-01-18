const Product = require('../models/product');

exports.addProduct = (_, res) => {
  res.render('add-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
  });
};
exports.postProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

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
