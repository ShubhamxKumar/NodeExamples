const express = require('express')
const route = express.Router();

route.use('/products', require('./products').route);
route.use('/users', require('./users').route);

exports = module.exports = {route}