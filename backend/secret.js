const express = require('express');
const router = express.Router();

router.get('/secret', function(req, res) {
  res.send('secret route !!');
});

//--------------------------

module.exports = router;
