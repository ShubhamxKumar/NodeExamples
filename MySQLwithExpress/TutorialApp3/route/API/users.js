const route = require('express').Router();
const User = require('../../db.js').User;
route.get('/', function(req, res){
    User.findAll().then(function(response){
        res.status(200).send(response);
    }).catch(function(err){
        res.status(500).send({
            error:'Could not find any user in the database'
        })
    })
})

route.post('/', function(req, res){
    User.create({
        name:req.body.name,
    }).then(function(user){
        res.status(201).send(user);
    }).catch(function(err){
        console.log(err);
        res.status(500).send('Could not add the user')
    })
})

exports = module.exports = {route}