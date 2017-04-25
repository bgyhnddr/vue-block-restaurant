let Sequelize = require('sequelize')
let sequelize = require('../../../../../sequelize')

const dish = sequelize.define(
  'dish', {
    name: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    img: Sequelize.INTEGER,
    description: Sequelize.TEXT
  }, {
    underscored: true
  })

module.exports = dish
