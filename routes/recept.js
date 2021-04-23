const express = require('express')
const router = express.Router()

const receptController=require('../controller/receptController')
const Auth=require('../middleware/auth')

router.post('/',Auth.user,receptController.create)
router.get('/ingredients',Auth.user,receptController.getAllIngredients)
// router.get('/:id',Auth.user,receptController.getOne)
// router.patch('/:id',Auth.user,receptController.update)
// router.delete('/:id',Auth.user,receptController.delete)

module.exports=router
// GET
// /ingredients
// Listar ingredienser paginerat. Denna endpoint ska även ha en sökfunktion med hjälp av en query-param “filter”.
// POST
// /recipes
// Skapar ett nytt recept. Endast tillgänglig för ägaren.
// PATCH
// /recipes/:id
// Uppdaterar ett recept Endast tillgänglig för ägaren.
// DELETE
// /recipes/:id
// Tar bort ett recept. Endast tillgänglig för ägaren.
// GET
// /recipes
// Hämtar recept paginerat. Denna endpoint ska även ha en sökfunktion med hjälp av en query-param “filter”
// GET
// /recipes/:id
// Hämtar ett specifikt recept

