var Game = require('../models/Game');

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
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

function show(req, res, next) {
  var id = req.params.id;
  console.log(id);
  Game.findById(id, function(err, game) {
    if(err) next(err);

    res.json(game);
  }).select('-__v');
}

function update(req, res, next) {
  var id = req.params.id;

  Game.findById(id, function(err, game) {
    if(err) next(err);

    game.title = req.body.title;
    game.type = req.body.type;
    game.platform = req.body.platform;

    game.save(function(err, updatedGame) {
      if(err) next(err);

      res.json(updatedGame);
    });
  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Game.remove({_id:id}, function(err) {
    if(err) next(err);

    res.json({message: 'Game successfully deleted'})
  });
}
