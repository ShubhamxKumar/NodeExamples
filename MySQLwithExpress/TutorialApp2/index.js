const express = require('express');
const server = express();
const db = require('./db');


server.use(express.json());
server.use(express.urlencoded({extended:true}))

server.set('view engine', 'hbs');
server.set('views', __dirname + '/views')

server.get('/', function(req, res){
    db.getallusers().then(function(persons){
        res.render('persons', {persons})
    }).catch(function(err){
        res.send(err);
    })
})

server.get('/add', function(req, res){
    res.render('add_person');
})

server.post('/add', function(req, res){
    db.addnewperson(req.body.name, req.body.age).then(function(){
        res.redirect('/');
    }).catch(function(err){
        res.send(err);
    })
})
const port = process.env.PORT || 3000;

server.listen(port, function() {
    console.log(`Server up and running on: ${port}`);
})