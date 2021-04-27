const Ingredients = require("../Models/Ingredients");
const fs = require("fs");
const data = fs.readFileSync("./ingredients.txt", {
  encoding: "utf-8",
});


async function seedIngredients() {
  const ingredients = data.trim().split("\n");
  try {
    for (let ingredient of ingredients) {
      await Ingredients.create({ item: ingredient });
    }
  } catch (error) {
    console.log(error);
  }
}
seedIngredients();