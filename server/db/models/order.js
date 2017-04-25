let Sequelize = require('sequelize')
let sequelize = require('../../../../../sequelize')

const order = sequelize.define(
  'order', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    desk_code: Sequelize.STRING,
    status: {
      type: Sequelize.STRING,
      comment:"处理中 已完结"
    }
  }, {
    underscored: true
  })

module.exports = order
