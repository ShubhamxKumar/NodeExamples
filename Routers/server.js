// In this tutorial we are going to learn how to use Routers(), which are useful to comprehend complex url requests
// Routes are basically mini-express servers which can be used in another express server. Routes are special middlewares
// which can create middleware of its own, hence we can extend our apps.

const express = require('express');
const server = express();
// this is how we import routes( which as mentioned above are special kind of middlewares)
const teacherRoute = require('./routes/teacher');
const studentRoute = require('./routes/student');

server.use('/students', studentRoute);// and here just like another middleware we can use routes
// meaning when someone send request to 'localhost:2233/students' then this automatically get passed to the studentRoute
// file we created and there it is been handled.
// and this is another way of using middlewares, that is using that middleware(in this case the routes) for that particular
// url request. This way we can extend our application.
server.use('/teachers', teacherRoute);

server.listen(2233,function () {
    console.log('Server up and running honey');
})

server.use((req,res) => {
    res.send(`
    <h1> 404 Page Not Found. </h1>
    `)
})