var express = require('express');
var router = express.Router();

var gamesController = require('../controllers/games');

/* GET home page. */
// This is where I will document my RESTful API
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// API routes
router.route('/api/games')
  // GET all games
  .get(gamesController.index)

module.exports = router;
