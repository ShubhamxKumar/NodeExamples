const route = require('express').Router();
const db = require('../db');
const Users = db.Users;
const passport = require('../passport');

route.get('/login', function(req, res){
    res.render('login');
});
route.get('/signup', function(req, res){
    res.render('signup');
});
route.post('/signup', function(req, res) {
    Users.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
    }).then(function(createdUser){
        res.redirect('/login');
    })
});
route.post('/login', passport.authenticate('local', {failureRedirect:'/login', successRedirect : '/private'}));
// we authenticate using local strategy.

route.get('/logout', function(req, res){
    req.logOut();
    res.redirect('/login');
})

exports = module.exports = {route}