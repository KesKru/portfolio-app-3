const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  // User | 'users/login' | Login user
  login: (req, res) => {
    const { email } = req.body.user;
    User.findOne({ email: email }, function(err, user) {
      jwt.sign(
        {
          id: user.id,
          username: user.username,
          email: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn: 60 },
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        }
      );
    });
  },

  logout: (req, res) => {
    res.send('logout');
  }
};
