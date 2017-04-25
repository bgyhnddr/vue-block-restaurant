let Sequelize = require('sequelize')
let sequelize = require('../../../../../sequelize')

const desk = sequelize.define(
  'desk', {
    code: {
      type: Sequelize.STRING,
      primaryKey: true
    }
  }, {
    underscored: true
  })

module.exports = desk
