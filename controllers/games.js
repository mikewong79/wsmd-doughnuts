var Game = require('../models/Game');

module.exports = {
  index: index
}

function index(req, res, next) {
  Game.find({}, function(err, games) {
    if(err) next(err);
    res.json({games: games, message: "You have succesfully retrieved all the games"})
  }).select('-__v');
}
