const db=require('./connection')
require('../models/User')
require('../models/Recept')
require('../models/Ingredients')
require('../models/receptIngredients')



db.sync()