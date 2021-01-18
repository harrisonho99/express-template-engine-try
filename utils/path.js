const path = require('path');
module.exports = path.dirname(require.main.filename);
console.log(path.dirname(require.main.path));
