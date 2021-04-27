const {unauthorized}=require('../errors/index')
const User=require('../models/User')


module.exports={
    user:(req,res,next)=>{
        const { authorization } = req.headers
        if (!authorization) { throw new unauthorized()} 
        const token=authorization.replace('Bearer ','')
        const user=User.validateToken(token)
        req.user=user  
        next()      
    }
} 