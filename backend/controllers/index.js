//-----------------------Modules-----------------------//
const path = require('path');
const jwt = require('jsonwebtoken');

//-----------------------Models-----------------------//
const md = require('../models/index');
//-----------------------Controlers-----------------------//
module.exports = {
  // User | 'users/login' | Login user, create session.
  login: (req, res) => {
    const { email, password } = req.body;
    md.User.findOne({ email: email }).then((user) => {
      if (!user) {
        return res.json({ message: "User doesn't exist" });
      } else {
        user
          .comparePassword(password)
          .then((match) => {
            if (match) {
              jwt.sign(
                {
                  id: user.id,
                  email: user.email
                },
                'secret123',
                { expiresIn: 60 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                }
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  },
  logout: (req, res) => {
    res.send('logout');
  }
};
