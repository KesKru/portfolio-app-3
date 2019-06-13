const express = require('express');
const router = express.Router();
const passport = require('passport');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const cont = require('../controllers/index'); // users routes controllers
const routes = []; // define aray to load routes into

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('landing page route');
  }
);

router.post(
  '/login',
  // passport.authenticate('jwt', { session: false }),
  cont.login
);

routes.push(router);

// read file names from the directory and add them to routes array
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const route = require(path.join(__dirname, file));
    routes.push(route);
  });

module.exports = routes;
