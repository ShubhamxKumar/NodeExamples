const express = require('express');
server = express();

server.get('/', function (req, res, next) {
    // a simple get request code.
    res.send('Hello world');
})

server.get('/:tod/:name', function(req, res, next) {
    // here the url has some dynamic parameters or for stupids like "me" variables.
    var tod = req.params.tod;// this is how you store the value of the variable passed through a url.
    var name = req.params.name;
    res.send("It is " + tod + " and you are'nt dead?" + name);
})

server.get('/:tod/', function(req, res, next){
    var tod = req.params.tod;
    var name = req.query.name;
     

    // now here what is happening, in the url we dont need to specify a parameter, instead
    // we can give a query like this "http://localhost:3000/evening/?name=shubham". here 
    // the code "?name = shubham" is a query, and is stored in a variable through the code
    // on line number 18. Where we accept query of "name".
    // to be more clear
    var college = req.query.college;
    res.send("It is " + tod + " and you are'nt dead?" + name + college);
    // here if the url also has a query named college then we can mention it in the url like
    // "http://localhost:3000/evening/?name=shubham&college=nsut", here we have two queries
    // mentioned in the variables.
    // the point in doing this is that we don't have to define a different route to get variables
    // in a same route we can also send values without making a special route to accept
    // url parameters that we did on line 9.
})








server.use(function (req, res){
    // here we are using a middleware to handle 404 errors, which means that we display this when there does not exist a 
    // path user is trying to reach.
    // in JS code runs from top to bottom, that is once a user enters a url, then it get processed from top to bottom
    // hence if first get request don't use thta url then it come to the next and so on.
    // this is where middleware comes in, if the request is handled by no one before this middleware
    // and this middleware doesnot require a url to work, then this will handle it or pass it.
    res.send(`
    <h1> 404 PAGE NOT FOUND </h1>
    `);
    // we are using server.use and not .get or .post or something, because we want it to handle all kind of request
    // use handle all kinds of request and execute the function in it.
})

server.listen(3000, function () {
    console.log('Server is Up and running!..');
})



