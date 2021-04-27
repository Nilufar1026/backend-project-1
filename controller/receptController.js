const { InvalidBody,receptNotFound, unauthorized } = require("../errors/index");

const Recept = require("../models/Recept");
const Ingredients = require("../models/Ingredients");

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
            const {title,instruction} = req.body
            if( !title || !instruction ){
                throw new InvalidBody(['title','instruction'])
            }
            const UserId=req.user.id
            const recept= await Recept.create({title,instruction,UserId})
            res.json({recept})
        }catch(error){next(error)}
    },

    async getAllIngredients(req,res,next){
        try {
            const {page,pageSize}=parseQuery(req.query)
            const allIngredients=await Ingredients.findAll({
                limit:pageSize,
                offset:(page-1)*pageSize,
                attributes: ['item'],
            })
            res.json({allIngredients})
          } catch (error) {
            next(error);
        }
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
            const {title,instruction} = req.body
            const field={}
            if(title) field.title=title
            if(instruction) field.instruction=instruction
            
            const recepts = await Recept.findOne({where:{id}})
            if(!recepts){ throw new receptNotFound(id) }
            if(recepts.UserId != req.user.id){ throw new unauthorized() }
            
            await Recept.update(field,{where:{id}})
            res.json({message:'Updated'})
        }catch(error){next(error)}
    },

    async delete(req,res,next){
        try{
            const {id}=req.params
            const recepts = await Recept.findOne({where:{id}})
            if(recepts.UserId != req.user.id){ 
                throw new unauthorized()
            }
            await recepts.destroy()
            res.json({message:'recept has deleted'})
        }catch(error){next(error)}
    },

    async getAllRecept(req,res,next){
        const {page,pageSize}=parseQuery(req.query)
        const UserId=req.user.id
        const recepts=await Recept.findAll({
            limit:pageSize,
            offset:(page-1)*pageSize,
            where:{ UserId }
        })
        res.json({recepts})
    },
    
}