const { DataTypes } = require('sequelize')
const db=require('../database/connection')
const User=require('./User')

const Recept=db.define('Recept',{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    instruction:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

User.hasMany(Recept)
Recept.belongsTo(User)

module.exports=Recept