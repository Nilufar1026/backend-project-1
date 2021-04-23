const { DataTypes } = require('sequelize')
const db=require('../database/connection')
const User=require('./User')

const Recept=db.define('Recept',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    ingredients:{
        type:DataTypes.STRING,
        allowNull:false
    },
    instruction:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

User.hasMany(Recept)
Recept.belongsTo(User)

module.exports=User