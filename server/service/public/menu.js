let menu = require('../../functions/menu')

exports.getDesks = (req, res) => {
  return menu.getDesks().then((result) => {
    res.send(result)
  })
}

exports.getMenus = (req, res) => {
  return menu.getMenus().then((result) => {
    res.send(result)
  })
}

exports.submitMenu = (req, res) => {
  return menu.submitMenu(req.body.dish_type, req.body.dish).then((result) => {
    res.send(result)
  })
}

exports.deleteMenu = (req, res) => {
  return menu.deleteMenu(req.body.id).then((result) => {
    res.send(result)
  })
}
