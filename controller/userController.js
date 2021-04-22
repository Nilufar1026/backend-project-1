const {InvalidBody}=require('../errors/index')
const User=require('../modules/User')

module.exports={
    async register(req,res,next){
        try{
            const {email,name,password}=req.body
            if( !email || !name || !password ){
                throw new InvalidBody(['email','name','password'])
            }
            const user  = await User.create({email,name,password})
            res.json({message:'You have registered!'})            
        }catch(error){next(error)}

        
    }
}