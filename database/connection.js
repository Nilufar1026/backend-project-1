const {Sequelize}= require('sequelize')

const db= new Sequelize({
    dialect:'sqlite',
    storage:'database/recept.db'
})

module.exports = db