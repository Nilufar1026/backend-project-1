const {unauthorized,Forbidden}=require('../errors/index')
const User=require('../models/User')


module.exports={
    user:(req,res,next)=>{
        const { authorization } = req.headers
        if (!authorization) { throw new unauthorized()} 
        const token=authorization.replace('Bearer ','')
        const user=User.validateToken(token)
        req.user=user  
        next()      
    },
    admin:(req,res,next)=>{
        const { authorization } = req.headers
        if (!authorization) { throw new unauthorized()} 
        const token=authorization.replace('Bearer ','')
        const user=User.validateToken(token)
        if(user.role !== 'admin'){throw new Forbidden()}
        req.user=user  
        next()      
    }
} 