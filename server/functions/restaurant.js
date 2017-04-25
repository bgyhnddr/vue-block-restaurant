exports.getDesks = () => {
  var desk = require('../db/models/desk')
  return desk.findAll()
}

exports.getMenus = () => {
  var menu = require('../db/models/menu')
  var dish = require('../db/models/dish')
  var dish_type = require('../db/models/dish_type')

  dish_type.belongsToMany(dish, {
    through: menu,
    foreignKey: "dish_type_name",
    otherKey: "dish_name"
  })

  return dish_type.findAll({
    include: [{
      model: dish
    }]
  })
}

exports.submitMenu = (dish_type_name, dishData) => {
  var menu = require('../db/models/menu')
  var dish = require('../db/models/dish')
  var dish_type = require('../db/models/dish_type')

  var exec = [dish_type.upsert({
    name: dish_type_name
  }), menu.upsert({
    dish_type_name: dish_type_name,
    dish_name: dishData.name
  })]

  if (dishData) {
    exec.push(dish.upsert(dishData))
  }
  return Promise.all(exec)
}

exports.deleteMenu = (id) => {
  var menu = require('../db/models/menu')
  return menu.destroy({
    where: {
      id: id
    }
  }).then(() => {
    return "deleted"
  })
}
