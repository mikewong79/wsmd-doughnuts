doughnuts = [
  {id: 1, flavor: "Yellow" , style: "Cake"},
  {id: 2, flavor: "Chocolate" , style: "French Cruller"},
  {id: 3, flavor: "Pumpkin" , style: "Yeast"},
  {id: 4, flavor: "Vanilla Iced" , style: "Old Fashioned"}
]

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}

function index(req, res, next) {
  res.json(doughnuts)
}

function create(req, res, next) {
  doughnuts.push(res.body)
  res.json(req.body)
}

function show(req, res, next) {
  var doughnut = doughnuts.filter(function(element){ return element["id"] == req.params.id })[0]
  res.json(doughnut)
}

function update(req, res, next) {
  for(i in doughnuts){
    if(doughnuts[i]["id"] == req.params.id){
      doughnuts[i] = req.body
    }
  }
  res.format({
    json: function(){ res.json(req.body) }
  })
}

function destroy(req, res, next) {
  for(i in doughnuts){
    if(doughnuts[i]["id"] == req.params.id){
      delete doughnuts[i]
    }
  }
  res.json({message : 'deleted' })
}
