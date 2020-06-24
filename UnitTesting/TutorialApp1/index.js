const express = require('express');
const server = express();
const path = require('path');
const fareutils = require('./fareutils');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use('/', express.static(path.join(__dirname, '/public_static')))

server.post('/calcfare', function(req, res){
    let km = parseFloat(req.body.km);
    let min = parseInt(req.body.min);
    let fare = fareutils.calcfare(km, min);
    res.send({fare : fare})
})

server.use('/rates', function(req, res){
    res.send(fareutils.rate);
})

server.listen(2000, function() {
    console.log(`Server up and running on port: 2000`);
})