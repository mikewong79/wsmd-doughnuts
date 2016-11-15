var Doughnut = require('../models/Doughnut');

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}

function index(req, res, next) {
  Doughnut.find({}, function(err, doughnuts) {
    if(err) next(err);
    res.json(doughnuts)
  }).select('-__v');
}

function create(req, res, next) {
  var doughnut = new Doughnut(req.body);

  doughnut.save(function(err, doughnut) {
    if(err) next(err);

    res.json(doughnut)
  });
}

function show(req, res, next) {
  var id = req.params.id;
  console.log(id);
  Doughnut.findById(id, function(err, doughnut) {
    if(err) next(err);

    res.json(doughnut);
  }).select('-__v');
}

function update(req, res, next) {
  var id = req.params.id;

  Doughnut.findById(id, function(err, doughnut) {
    if(err) next(err);

    doughnut.flavor = req.body.flavor;
    doughnut.style = req.body.style;

    doughnut.save(function(err, updatedDoughnut) {
      if(err) next(err);

      res.json(updatedDoughnut);
    });
  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Doughnut.remove({_id:id}, function(err) {
    if(err) next(err);

    res.json({message: 'Doughnut successfully deleted'})
  });
}
