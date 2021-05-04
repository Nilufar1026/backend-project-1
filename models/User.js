const { DataTypes } = require('sequelize')
const db=require('../database/connection')
const bcrypt=require('bcryptjs')
const {InvalidCredentials,tokenExpired,unauthorized}=require('../errors/index')
const jwt=require('jsonwebtoken')

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
    },
    role:{
        type:DataTypes.STRING,
        enum:['user','admin'],
        defaultValue:'user'
    }
})

User.beforeCreate((user,options)=>{
    user.password=bcrypt.hashSync(user.password,10)
})

User.authenticate= async (email,password)=>{
    const user=await User.findOne({where:{email}})
    if(!user){throw new InvalidCredentials()}

    const matchPassword=bcrypt.compareSync(password,user.password)
    if(matchPassword){
        const payload={id:user.id,name:user.name,email:user.email,role:user.role}
        return jwt.sign(payload,process.env.JWT_SERCRET,{expiresIn:'1w'})
    }else{
        throw new InvalidCredentials()
    }
}
User.validateToken=(token)=>{
    try{
        return jwt.verify(token,process.env.JWT_SERCRET)
    }catch(error){
        if(error instanceof jwt.TokenExpiredError){
            throw new tokenExpired()
        }else if(eroor instanceof jwt.JsonWebTokenError){
            throw new unauthorized()
        }else{
            throw error
        }

    }
}

module.exports=User