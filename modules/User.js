const { DataTypes } = require('sequelize')
const db=require('../database/connection')

const User=db.define('User',{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:{
            args:true,
            mes:'Email already exists!'
        }
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=User