const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
//Dir local
const adminRoutes = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');
const errorController = require('./controllers/errors');
const app = express();

//set pub template engine
app.set('view engine', 'pug');
app.set('views', 'views');
//parse raw data
app.use(bodyParser.urlencoded({ extended: true }));
//log request
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a',
});
app.use(morgan('combined', { stream: accessLogStream }));
// static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use(shopRoute);
app.use('/admin', adminRoutes.router);
app.use('*', errorController.get404);
//init
app.listen(3000);
