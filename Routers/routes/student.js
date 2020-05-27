const express = require('express');
const Router = express.Router;
const route = Router();

let students = [
    {
        'name' : 'Timothy',
        'course' : 'Development',
    },
    {
        'name' : 'Abhinav',
        'course' : 'Competetive Coding',
    },
    {
        'name' : 'Johnny',
        'course' : 'Fax',
    }
]

route.get('/', (req, res) => {
    res.send(students);
})
//logic of putting this function here is explained in teachers.js file.
route.get('/add', function(req, res){
    teachers.push({
        'name' : req.query.name,
        'course' : req.query.course,
    })
    res.send(students);
})

route.get('/:id', (req, res) => {
    res.send(students[req.params.id]);
})

module.exports = route;// logic of doing this wierd shit is also explained in teachers.js file.