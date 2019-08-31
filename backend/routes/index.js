const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const routes = []; // define aray to load routes into

router.get('/', (req, res) => {
  res.send('landing page route');
});

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
