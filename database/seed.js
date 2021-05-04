// const Ingredients = require("../Models/Ingredients");
// const fs = require("fs");
// const data = fs.readFileSync("./ingredients.txt", {
//   encoding: "utf-8",
// });


// async function seedIngredients() {
//   const ingredients = data.trim().split("\n");
//   try {
//     for (let ingredient of ingredients) {
//       await Ingredients.create({ item: ingredient });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// seedIngredients();

const User=require('../models/User')
User.create({email:'user1@gmail.com',name:'user1',password:'user1'})
User.create({email:'user2@gmail.com',name:'user2',password:'user2'})
User.create({email:'user3@gmail.com',name:'user3',password:'user3'})
User.create({email:'user4@gmail.com',name:'user4',password:'user4'})
User.create({email:'admin@gmail.com',name:'admin',password:'admin',role:'admin'})

