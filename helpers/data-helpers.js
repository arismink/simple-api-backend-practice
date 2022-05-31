// check if recipe already exists
const mockData = require("../data/data.json");
const data = mockData.recipes

const recipeCheck = (recipe) => {
  // Check if recipe already exists
  if (data.some(d => d.name === recipe.name)) {
    return false
  }

  // if recipe does not exist, push it
  saveRecipe(recipe)
  return console.log("awesome!")
}

const saveRecipe = (recipe) => {
  data.push(recipe);
}

module.exports = { recipeCheck };