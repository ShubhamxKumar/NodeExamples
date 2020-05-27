const express = require('express');
const route = express.Router();

let todos = [
    {task:"task 1"},
    {task:"task 2"},
    {task:"task 3"}
];
route.get('/', function(req, res){ 
    res.render('todo', {todos});
    //here we want to render todos.hbs on the screen but we dont need to specify .hbs because we already told the server that
    // we are using hbs view engine, the second argument is the data we want to send, we send it as an object.
})

route.post('/', function(req, res){
    todos.push({
        task: req.body.newtodo,
        // we did this because when we accessing any element from inside the hbs page we access it by its 'name' argument
        // so the input form had the name="newtodo".
    })
    res.redirect('/todos');
    // what it does is that it redirect the page to the url localhost:2222/todos
    // redirects are always a get requests
})


module.exports = route;
