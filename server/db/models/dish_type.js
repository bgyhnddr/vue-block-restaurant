let Sequelize = require('sequelize')
let sequelize = require('../../../../../sequelize')

const dish_type = sequelize.define(
  'dish_type', {
    name: {
      type: Sequelize.STRING,
      primaryKey: true
    }
  }, {
    underscored: true
  })

module.exports = dish_type
