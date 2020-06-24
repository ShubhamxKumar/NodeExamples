// we are using a different approach here because we want to run both the web socket and http server on the same port.

const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
// express server in itself is a middleware which takes a request and send back a response
// so we are passing in a middleware

const io = socketio(server);
// we create a socketio instance on the http server
// go to "localhost:8000/socket.io/socket.io.js", though we never created this path but when we create the instance socket.io
// creates its own client side library and make it available to us through a middleware.
// so what we are seeing is a client side library. So we use this is our front end.

let usersocket = {};

app.use("/", express.static(path.join(__dirname, "/frontend")));
io.on("connection", function (socket) {
  console.log('New socket formed from" ' + socket.id);
  // each socket has an unique id.
  socket.emit("connected");
  // what we emit is the event, make sure when on the front end script, you listen to the same event.
  // like socket.on('connected', () => {}), meaning event name should be exactly same as what has been emitted.

  // Here we set up and listener to the event called "send_msg", the same event on which the client is sending message.
  // and we expecting data from the message
  socket.on("send_msg", function (data) {
    console.log("Recieved message: " + data.msg);
    // Now lets send back the data we recieved back to the clients that are connected.

    if (data.msg.startsWith("@")) {
        // what this block of code will do is that, if we write a message like "@potato: How are you?", then it should only
        // go to potato and no one else.
        // so we extracted the username and send the message to him.
        let reciever = data.msg.split(':')[0].substr(1);
        // this block of code helps us to send the message to a particular person
        io.to(usersocket[reciever]).emit("recv_message", data);
    } else {
      // when we write io.emit everyone connected to the server gets the messege including the user who sent it
      /* io.emit('recv_message', data); */
      // But if we write this instead, then everyone will get the message except the user who sent it.
      socket.broadcast.emit("recv_message", data);
    }
  });

  socket.on("login", function (data) {
    usersocket[data.user] = socket.id;
    console.log(usersocket);
  });
});

const port = process.env.PORT || 8000;

server.listen(port, function () {
  console.log(`Server up and running on port : ${port}`);
});
// we are doing server.listen instead of app.listen because app.listen under the hood does the same thing, it creates a
// http server and run it.
