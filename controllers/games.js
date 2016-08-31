var Game = require('../models/Game');

module.exports = {
  index: index,
  create: create
}

function index(req, res, next) {
  Game.find({}, function(err, games) {
    if(err) next(err);
    res.json(games)
  }).select('-__v');
}

function create(req, res, next) {
  var game = new Game(req.body);

  game.save(function(err, game) {
    if(err) next(err);

    res.json(game)
  });
}
