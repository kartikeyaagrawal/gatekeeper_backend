var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("inside users route");
  res.send('respond with a resource');
});

module.exports = router;
