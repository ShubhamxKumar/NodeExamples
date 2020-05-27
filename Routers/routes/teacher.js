const express = require('express');
const Router = express.Router;
const route = Router();

let teachers = [
    {
        'name' : 'Johnny',
        'subject' : 'Plumbing',
    },
    {
        'name' : 'Shubham',
        'subject' : 'development',
    },
    {
        'name' : 'Abhinav',
        'subject' : 'Management',
    }
]

route.get('/', function (req, res){
    res.send(teachers);
})

route.get('/add', function(req, res){
    teachers.push({
        'name' : req.query.name,
        'subject' :req.query.subject,
    })
    res.send(teachers);
    console.log(teachers);
})
// we are putting this fucntion before '/:id' because the route doesnot know wether the id is string or number, and 
// as we know that request run from top to bottom, so if we put '/:id' before then what will happen is that
// it will try to send teachers[add], which obviously not possible, hence we need to do this.

route.get('/:id', function(req, res){
    res.send(teachers[req.params.id]); 
})


module.exports = route;
// as we are using this route in server.js we need to export it in order to use it in another function.