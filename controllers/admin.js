const Product = require('../models/product');

exports.addProduct = (_, res) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
  });
};
exports.postProduct = (req, res) => {
  const product = new Product(
    req.body.title,
    req.body.price,
    req.body.imageUrl,
    req.body.description
  );
  product.save();
  res.redirect('/');
};
