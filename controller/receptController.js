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

    async getAllIngredients(req,res,next){
        const page= +req.query.page || 0
        let pageSize= +req.query.pageSize || 10
        pageSize = pageSize < 1 ? 1 : pageSize
        pageSize = pageSize >10 ? 10 : pageSize
        const UserId=req.user.id
        const allIngredients=await Recept.findAll({
            limit:pageSize,
            offset:page*pageSize,
            attributes: ['name','ingredients'],
            where:{ UserId }
        })
        res.json({allIngredients})
    },
    async getReceptById(req,res,next){
        const id=req.params.id
        const recept=await Recept.findOne({
            where:{ id }
        })
        res.json({recept})
    },

}