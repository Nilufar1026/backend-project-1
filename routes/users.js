const express = require('express')
const router = express.Router()

const userController=require('../controller/userController')
const Auth=require('../middleware/auth')

router.post('/register',userController.register)
router.post('/auth',userController.login)
router.get('/me',Auth.user,userController.me)
router.get('/users',Auth.admin,userController.all)


module.exports=router
