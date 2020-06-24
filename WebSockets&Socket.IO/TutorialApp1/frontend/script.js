console.log("Front end script working ......");

let socket = io();
// we have to provide the address of the website from which the socket.io server is being served, but if we are connecting
// to the same server to which are webpage is being served then we can leave it blank.

socket.on("connected", function () {
  console.log("Connected" + socket.id);
});
// a listener to the event created on the server side.

$(function () {
  let msglist = $("#msglist");
  let sendbtn = $("#sendbtn");
  let msg = $("#msg");
  let username = $("#username");
  let loginbtn = $("#loginbtn");
  let loginbox = $("#login-box");
  let chatbox = $("#chat-box");
  let user = "";

  loginbtn.click(function () {
    console.log("working...");
    user = username.val();
    chatbox.show();
    loginbox.hide();
    socket.emit("login", { user: user });
  });

  sendbtn.click(function () {
    let message = msg.val();
    socket.emit("send_msg", { msg: message, user: user });
    // Now here we are emitting a message into the pipeline.
  });

  socket.on("recv_message", function (data) {
    msglist.append($("<li>" + data.user + " : " + data.msg + "</li>"));
  });
});
