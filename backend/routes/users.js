const express = require('express');
const router = express.Router();
const cont = require('../controllers/users'); // users routes controllers
const val = require('../validation/users'); // Input validation middleware

// REST routes

// Index | Get all users
// Show | Get one user

// Create | Show form for ew user
router.post('/user', val.validateInputs, cont.createUser);

// Update | Show form for ew user
// Destroy | Show form for ew user

module.exports = router;
