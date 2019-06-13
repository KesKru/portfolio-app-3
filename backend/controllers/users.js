//-----------------------Modules-----------------------//

const path = require('path');
const md = require('../models/index');
const errors = {};

//-----------------------Controllers-----------------------//

module.exports = {
  createUser: (req, res) => {
    const newUser = new md.User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    newUser.hashPassword().then((hash) => {
      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
          res.json({ user: user });
        })
        .catch((err) => {
          res.send(err);
        });
    });
  }
};
