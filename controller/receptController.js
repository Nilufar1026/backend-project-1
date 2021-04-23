const { create } = require("../modules/User");

module.exports={
    async create(req,res,next){
        try{
            const {name,ingredients,instruction}
            if( !name || !ingredients || !instruction ){
                throw new InvalidBody(['name','ingredients','instruction'])
            }
        }catch(error){next(error)}
    }
}