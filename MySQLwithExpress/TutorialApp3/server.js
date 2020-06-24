// in this app we are going to create front end and backend saperately hence we are going to use ajax request to pass data 
// from the API.

const express = require('express');
const server = express();
const path = require('path');

server.use(express.json());
server.use(express.urlencoded({extended:true}))


server.use('/', express.static(path.join(__dirname, 'public')))
server.use('/api', require('./route/API/index.js').route)

const port = process.env.PORT||3000;

server.listen(port, function(req, res){
    console.log(`Server up and running: ${port}`);
})