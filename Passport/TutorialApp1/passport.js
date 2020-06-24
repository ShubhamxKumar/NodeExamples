const passport = require("passport");
const Users = require("./db").Users;
const passportLocal = require("passport-local");

passport.serializeUser(function (user, done) {
  done(null, user.username);
  // first argument of the 'done' callback is the user.
  // we store the username in the session.
});
// serializeuser tells how to store user in the session, and deserialize user tells how to recover actual user object from the session.
passport.deserializeUser(function (username, done) {
  Users.findOne({
    where : {
        username : username,
    }
  })
    .then(function (user) {
      if (!user) {
        // if we don't find a user in the database with that username which we got back from the session.
        console.log("no such user!!!!");
        return done(new Error("No such User found!!!"));
      }
      return done(null, user);
    })
    .catch(function (err) {
      done(err);
    });
});
// we use serializeUser to save the user in the session.
// we use the deserializeUser to know which user is saved in the session

passport.use(
  new passportLocal.Strategy(function (userName, password, done) {
    Users.findOne({
      where: {
        username: userName,
      },
    }).then(function (user) {
      if (!user) {
        return done(null, false, {message:'No such user found in the database!!!'});
      }
      if (user.password != password) {
        return done(null, false, {message:'Wrong Password!!!'});
      }
      return done(null, user);
    }).catch((err)=>{
        return done(err);
    })
  })
);

exports = module.exports = passport;
