const route = require('express').Router();

route.get('/', function(req, res){
    res.send('visible to all');
})

exports = module.exports = {route}