const express = require('express');
const server  = express();
const path = require('path');
const session = require('express-session');
const passport = require('./passport');

const publicRoute = require('./route/public.js');
const privateRoute = require('./route/private.js');
const authRoute = require('./route/route.js');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(session({
    secret: 'somesecretcodebitch', // this secret is use to encode your cookies, so please for god sake dont tell it to anyone.
}))
server.use(passport.initialize());
server.use(passport.session());
// these tells the server to use passport and session middleware of passport...

server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, '/views'))

server.use('/', authRoute.route);
server.use('/public', publicRoute.route);
server.use('/private', privateRoute.route);

const port = process.env.PORT || 3000;

server.listen(port,  function() {
    console.log(`Server up and running on port: ${port}`);
})