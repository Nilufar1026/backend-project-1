const db=require('./connection')
require('../modules/User')
require('../modules/Recept')

db.sync()