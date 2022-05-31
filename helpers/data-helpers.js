// check if recipe already exists
const mockData = require("../data/data.json");
const data = mockData.recipes

const recipeCheck = (recipe, save) => {
  // Check if recipe already exists
  if (data.some(d => d.name === recipe.name)) {
    return true
  }
  return false
}

// add new recipe
const saveRecipe = (recipe) => {
  data.push(recipe);
}

// update existing recipe
const updateRecipe = (recipe) => {
  const index = data.findIndex(obj => obj.name === recipe.name);

  data[index] = recipe;

}

module.exports = { recipeCheck, saveRecipe, updateRecipe };