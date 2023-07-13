const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Data = db.define('data' ,{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    tempValue: {
        type: DataTypes.STRING,
        allowNull: false
    },
    humValue: {
        type: DataTypes.STRING,
        allowNull: false
    }
   
})

module.exports = Data     