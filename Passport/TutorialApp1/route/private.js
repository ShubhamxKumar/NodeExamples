const route = require("express").Router();

route.get("/", function (req, res) {
  if (req.user) {
    // this user object is only available in the req if the user sends the correct cookie and user is already logged in.
    res.send(`Visible to the person with username: ${req.user.username}`);
    console.log(req.user);
  } else {
    res.redirect("/login");
  }
});

exports = module.exports = { route };
