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
      const details = {
        ingredients: [],
        numSteps: ""
      };

      data.filter(rec => rec.name === req.params.recipe).map(obj => {
        details.ingredients = obj.ingredients;
        details.numSteps = obj.instructions.length;
      });

      res.json(details);

    } catch (error) {
      // Send status 200 if recipe does NOT exist
      res.sendStatus(200);
    }

  })

  return router;
};
