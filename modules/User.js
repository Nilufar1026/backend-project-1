const { DataTypes } = require('sequelize')
const db=require('../database/connection')
const bcrypt=require('bcryptjs')

const User=db.define('User',{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:{
            args:true,
            msg:'Email already exists!'
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

User.beforeCreate((user,options)=>{
    user.password=bcrypt.hashSync(user.password,10)
})

module.exports=User