let Sequelize = require('sequelize')
let sequelize = require('../../../../../sequelize')

const order_list = sequelize.define(
  'order_list', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: Sequelize.INTEGER
  }, {
    underscored: true
  })

module.exports = order_list
