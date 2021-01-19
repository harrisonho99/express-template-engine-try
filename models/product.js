const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const p = path.join(rootDir, 'data', 'products.json');

const getProductFromFs = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
      return;
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, price, imgURL, desc) {
    this.title = title;
    this.price = price;
    this.imgURL = imgURL;
    this.desc = desc;
  }

  save() {
    getProductFromFs((data) => {
      data.push(this);
      fs.writeFile(p, JSON.stringify(data), (err) => {
        if (err) console.log(err, '---error');
      });
    });
  }
  static fetchAll(cb) {
    getProductFromFs(cb);
  }
};
