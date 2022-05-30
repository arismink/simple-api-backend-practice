const router = require("express").Router();

const mockData = require("./data.json");
const data = mockData.recipes

module.exports = (db) => {
  router.get("/recipes", (req, res) => {
    const recipeNames = [];

    for (recipe of data) {
      recipeNames.push(recipe.name)
    }
    res.json({recipeNames});
  })

  router.get("/recipes/details/:recipe", (req, res, next) => {

    const ingredients = data.filter(rec => rec.name === req.params.recipe).map(obj => obj.ingredients)[0]

    const steps = data.filter(rec => rec.name === req.params.recipe).map(obj => obj.instructions.length)[0]

    const details = { ingredients, numSteps: steps }

    res.json(details);

    next(createError(200));

  })

}
