let Sequelize = require('sequelize')
let sequelize = require('../../../../../sequelize')

const menu = sequelize.define(
  'menu', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dish_name: {
      type: Sequelize.STRING,
      unique: "menu"
    },
    dish_type_name: {
      type: Sequelize.STRING,
      unique: "menu"
    }
  }, {
    underscored: true
  })

module.exports = menu
