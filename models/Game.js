var mongoose = require('mongoose');

var GameSchema = mongoose.Schema({
  title: String,
  platform: String,
  type: String
});

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;
