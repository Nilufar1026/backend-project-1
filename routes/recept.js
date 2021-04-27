const express = require('express')
const router = express.Router()

const receptController=require('../controller/receptController')
const Auth=require('../middleware/auth')

router.post('/',Auth.user,receptController.create)
router.get('/',Auth.user,receptController.getAllRecept)
router.get('/ingredients/:page',Auth.user,receptController.getAllIngredients)  
router.get('/:id',Auth.user,receptController.getReceptById)
router.patch('/:id',Auth.user,receptController.update)
router.delete('/:id',Auth.user,receptController.delete)

module.exports=router





