// request comes from top to bottom so make sure youb place your middlewares right MF

const express = require('express')
const server = express();
const todoRoute = require('./routes/todo')

server.use(express.json());
// to manage data sending and requesting in a readable json format
server.use(express.urlencoded({extended:true}));
// to make sure that data get pass properly by encoding it, because http requests does supports all forms of data formats
server.use('/todos', todoRoute);

server.get('/', function(req, res){
    res.send('Hello');
})

server.use('/public', express.static(__dirname + '/public'))
// Now what this MF does is that like we want to show a static content/website whenever a user visits localhost:3000/public
// we do this, express.static() it takes a path to the folder where you have stored your static website and show that to the 
// user, like in this case we have stored that website in a "public" folder. So whenever a user visits that page
// our server with render that static website to the screen.
// we need to provide the path to the public folder, like i did, __dirname gives us the directory path in which the 
// server or in this case index.js is running, and then we add "/public" to go to that folder
// And on a side note we haven't specified the name of the html file, that is because node automatically searches
// for an file names 'index', and we have created a file of that name in that folder.
// We have another html file name todo.html. To render that page user needs to visit "localhost:3000/public/todo.html"
// and if we want to render index.html then user only have to visit "localhost:3000/public" this url
// because as I mentioned node automatically searches for "index" named files.

server.listen(3000, function () {
    console.log('Server up and running!!');
})