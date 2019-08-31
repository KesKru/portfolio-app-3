const express = require('express');
const router = express.Router();
const passport = require('passport');
// const cont = require('../controllers/auth'); // users routes controllers
const contAuth = require('../controllers/auth');

// Login route
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  contAuth.login
);
// Demo secret route for testing.
router.get(
  '/secret',
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    res.send('this is a secret page.');
  }
);
module.exports = router;
