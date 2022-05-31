const router = require("express").Router();

const mockData = require("../data.json");
const data = mockData.recipes

const { recipeCheck, saveRecipe } = require("../helpers/data-helpers")

module.exports = () => {
  router.get("/", (req, res) => {
    const recipeNames = [];

    for (recipe of data) {
      recipeNames.push(recipe.name)
    }
    res.json({recipeNames});
    console.log(recipeNames)
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

      res.json({details});
      console.log(details);

    } catch (e) {
      // Send status 200 if recipe does NOT exist
      res.sendStatus(200);
    }

  });

  router.post("/", (req, res) => {

    try {
      console.log('data retrieved:', req.body);

      // Check if recipe already exists
      if (recipeCheck(req.body) === false) {
        throw Error('Recipe already exists!')
      }

      res.json(req.body)

    } catch(e) {
      // set status code, print error message
      res.status(400).send({ error: e.message})
    }


  })


  return router;
};
