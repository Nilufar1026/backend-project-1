const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const Recept = require("./Recept");
const  Ingredients  = require("./Ingredients");

const receptIngredients = db.define("receptIngredients", {
  Amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = receptIngredients;

Recept.belongsToMany(Ingredients,{ through: receptIngredients });
Ingredients.belongsToMany(Recept,{ through: receptIngredients });