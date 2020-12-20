const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

passport.serializeUser(function (userData, callback) {
  // console.log("Сериализация: ", userData);
  callback(null, userData.id);
});

passport.deserializeUser(function (id, callback) {
  // console.log("Десериализация: ", id);
  User.getUserById(id, (error,docs)=>{
    docs.password = "secret"
    callback(null, docs);
  })
});

passport.use(
  new LocalStrategy({ usernameField: 'username' }, function(
    username,
    password,
    done
  ) {
  User.getUserbyNickname(username, (error, userDbData) => {
    if (error) {
      throw error;
    } else if (userDbData[0] === undefined) {
      return done(null, false);
    } else {
      User.comparePass(
      password,
        userDbData[0].password,
        (error, success) => {
          if (error) {
            throw error;
          } else if (success) {
            return done(null, userDbData[0]);
          } else {
            return done(null, false);
          }
        }
      );
    }
  });
  })
);