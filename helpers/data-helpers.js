// check if recipe already exists
const mockData = require("../data/data.json");
const data = mockData.recipes

const recipeCheck = (recipe, save) => {
  // Check if recipe already exists
  if (data.some(d => d.name === recipe.name)) {
    return true
  }

  // If need to save
  if (save) {
    // if recipe does not exist, push it
    saveRecipe(recipe)
    return console.log("added!")
  } else {

    updateRecipe(recipe);
    return console.log("updated!")
  }

  return false
}

const saveRecipe = (recipe) => {
  data.push(recipe);
}

const updateRecipe = (recipe) => {

}

module.exports = { recipeCheck };