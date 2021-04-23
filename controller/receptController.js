const { InvalidBody,receptNotFound, unauthorized } = require("../errors/index");
const { update } = require("../modules/Recept");
const Recept = require("../modules/Recept");

function parseQuery(query){
    const page= +query.page || 0
    let pageSize= +query.pageSize || 10
    pageSize = pageSize < 1 ? 1 : pageSize
    pageSize = pageSize >10 ? 10 : pageSize
    return {page,pageSize}
}

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
        const {page,pageSize}=parseQuery(req.query)
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
        try{
            if(!recept){
                throw new receptNotFound(id)
            }
            res.json({recept})            
        }catch(error){next(error)}
    },

    async update(req,res,next){
        try{
            const {id}=req.params
            const {name,ingredients,instruction} = req.body
            const field={}
            if(name) field.name=name
            if(ingredients) field.ingredients=ingredients
            if(instruction) field.instruction=instruction
            
            const recepts = await Recept.findOne({where:{id}})
            if(!recepts){ throw new receptNotFound(id) }
            if(recepts.UserId != req.user.id){ throw new unauthorized() }
            
            await Recept.update(field,{where:{id}})
            res.json({message:'Updated'})
        }catch(error){next(error)}
    },

}