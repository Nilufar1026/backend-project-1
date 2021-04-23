const { InvalidBody } = require("../errors/index");
const Recept = require("../modules/Recept");

module.exports={
    async create(req,res,next){
        try{
            const {name,ingredients,instruction} = req.body
            if( !name || !ingredients || !instruction ){
                throw new InvalidBody(['name','ingredients','instruction'])
            }
            const UserId=req.user.id
            const recept= await Recept.create({name,ingredients,instruction,UserId})
            res.json({recept})
        }catch(error){next(error)}
    },


}