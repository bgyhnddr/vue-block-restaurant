let Sequelize = require('sequelize')
let sequelize = require('../../../../../sequelize')

const order_list_detail = sequelize.define(
  'order_list_detail', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_list_id: Sequelize.INTEGER
  }, {
    underscored: true
  })

module.exports = order_list_detail
