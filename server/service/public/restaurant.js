let restaurant = require('../../functions/restaurant')

exports.getDesks = (req, res) => {
  return restaurant.getDesks().then((result) => {
    res.send(result)
  })
}

exports.getMenus = (req, res) => {
  return restaurant.getMenus().then((result) => {
    res.send(result)
  })
}

exports.submitMenu = (req, res) => {
  return restaurant.submitMenu(req.body.dish_type, req.body.dish).then((result) => {
    res.send(result)
  })
}

exports.deleteMenu = (req, res) => {
  return restaurant.deleteMenu(req.body.id)
}
