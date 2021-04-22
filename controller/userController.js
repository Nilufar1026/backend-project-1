const {InvalidBody}=('../errors')

module.exports={
    register(req,res,next){
        const {email,name,password}=req.body
        if( !email || !name || !password ){
            throw new InvalidBody(['email','name','password'])
        }
    }
}