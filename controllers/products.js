const products = [];

exports.products = products;

exports.addProduct = (_, res) => {
  res.render('add-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
  });
};
exports.postProduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getShop = (_, res) => {
  res.render('shop', {
    products,
    pageTitle: 'Shop Page',
    hasProduct: products.length > 0,
  });
};

