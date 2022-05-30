const router = require("express").Router();

const mockData = require("../data.json");
const data = mockData.recipes

module.exports = (db) => {
  router.get("/", (req, res) => {

    const recipeNames = [];

    for (recipe of data) {
      recipeNames.push(recipe.name)
    }
    return res.json({recipeNames});
  })

  router.get("/details/:recipe", (req, res) => {

    try {
      const ingredients = data.filter(rec => rec.name === req.params.recipe).map(obj => obj.ingredients)[0]

      const steps = data.filter(rec => rec.name === req.params.recipe).map(obj => obj.instructions.length)[0]

      const details = { ingredients, numSteps: steps }

      res.json(details);

    } catch (error) {
      // Send status 200 if recipe does NOT exist
      res.sendStatus(200);
    }

  })

  return router;
};
