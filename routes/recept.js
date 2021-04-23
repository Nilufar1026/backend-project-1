const express = require('express')
const router = express.Router()

const receptController=require('../controller/receptController')
const Auth=require('../middleware/auth')

router.post('/',Auth.user,receptController.create)
router.get('/',Auth.user,receptController.getAllRecept)
router.get('/ingredients',Auth.user,receptController.getAllIngredients)  //need check ,after patch
router.get('/:id',Auth.user,receptController.getReceptById)
router.patch('/:id',Auth.user,receptController.update)
router.delete('/:id',Auth.user,receptController.delete)

module.exports=router


// PATCH
// /recipes/:id
// Uppdaterar ett recept Endast tillgänglig för ägaren.
// DELETE
// /recipes/:id
// Tar bort ett recept. Endast tillgänglig för ägaren.
// GET
// /recipes
// Hämtar recept paginerat. Denna endpoint ska även ha en sökfunktion med hjälp av en query-param “filter”


