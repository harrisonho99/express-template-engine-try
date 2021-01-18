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
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductFromFs((data) => {
      data.push(this);
      fs.writeFile(p, JSON.stringify(data), (err) => {
        console.log(err, '---error');
      });
    });
  }
  static fetchAll(cb) {
    getProductFromFs(cb);
  }
};
