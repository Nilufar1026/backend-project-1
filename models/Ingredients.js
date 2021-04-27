const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const Ingredients = db.define("Ingredients", {
  item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = Ingredients;