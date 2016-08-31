var express = require('express');
var router = express.Router();

/* GET home page. */
// This is where I will document my RESTful API
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
