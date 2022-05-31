// check if recipe already exists
const mockData = require("../data.json");
const data = mockData.recipes

const recipeCheck = (recipe) => {
  if (data.some(d => d.name === recipe.name)) {
    console.log("hello")
    return false
  }


  saveRecipe(recipe)
  return console.log("awesome!")
}

const saveRecipe = (recipe) => {
  data.push(recipe);
}

module.exports = { recipeCheck, saveRecipe };