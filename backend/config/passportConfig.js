const passport = require('passport');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'user[email]',
        passwordField: 'user[password]'
      },
      function(email, password, done) {
        User.findOne({ email: email }, function(err, user) {
          // console.log(req);
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, {
              message: 'User with this email does not exist.'
            });
          }
          user.comparePassword(password).then((match) => {
            if (match) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Incorrect password.' });
            }
          });
        });
      }
    )
  );

  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
      },
      function(jwt_payload, done) {
        User.findOne({ id: jwt_payload._id }, (err, user) => {
          if (err) {
            return done(err, false);
          }
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      }
    )
  );
};
