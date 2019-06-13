//-----------------------Modules-----------------------//

const express = require('express'); // include express module
const bodyParser = require('body-parser'); // parsing incoming express
const passport = require('passport');
const cors = require('cors');
const app = express(); // create an express instance
// Routes
const routes = require('./routes/index');

//-----------------------Config-----------------------//

// Database
require('./config/databaseConfig'); // load and run db config
require('./config/passportConfig'); // load passport config

// Middleware
app.use(cors()); // Alow Cross-origin resource sharing
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(bodyParser.json()); // parse json data
app.use(passport.initialize());

// Routes
app.use(routes);
app.get('*', (req, res) => res.send('No such route.'));

//-----------------------Start server-----------------------//

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}...`));
