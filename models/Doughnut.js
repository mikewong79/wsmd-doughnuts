var mongoose = require('mongoose');

var DoughnutSchema = mongoose.Schema({
  flavor: String,
  style: String
});

var Doughnut = mongoose.model('Doughnut', DoughnutSchema);

module.exports = Doughnut;
