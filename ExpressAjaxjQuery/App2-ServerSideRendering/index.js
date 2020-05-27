/// In this app we are going to learn about rendering templates, because some people may have disabled javascript in their 
// browsers hence sending static files back to clients and running Javascript on their browser is not always a good idea.
// what we did in in tutorialapp1 was sending ajax calls from the browser and sending js objects and getting back js 
// objects, but if some browser have disabled JavaScript then those ajaz calls can never be made, so thats why we use rendering.
// AJAX methods are faster in large apps as only data is travelled across connections but in rendering whole page is \
// reloaded so I means we can't say that either of them is perfect each one of'em have some flaws, so it's your call what
// method you want to use.

const express = require('express');
const server = express();
const todoRoute = require('./routes/todo');


server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.set('view engine', 'hbs');
// view engines are basically used to create templates where we can inject out dynamic data and show it on the browser.
// and this is how we set our view engine to 'hbs' in this case, because hbs syntax is pretty similar to html.
server.set('views', __dirname + '/views');
// it will tell the server where to look for the views folder, in node and express all the template are stored in 'views',
// and according to conventions we name our folders 'views'.

server.use('/todos', todoRoute);

server.listen(2222, function(){
    console.log('server is running!!');
})