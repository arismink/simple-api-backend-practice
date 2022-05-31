const router = require("express").Router();

const res = require("express/lib/response");
const mockData = require("../data/data.json");
const data = mockData.recipes

const { recipeCheck, saveRecipe, updateRecipe } = require("../helpers/data-helpers")

module.exports = () => {
  // return an array of recipe names
  router.get("/", (req, res) => {
    const recipeNames = [];

    for (recipe of data) {
      recipeNames.push(recipe.name)
    }
    res.json({recipeNames}).status(200);
  })

  // return ingredients and # of steps if recipe exists
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

      res.json({details}).status(200);

    } catch (e) {
      // Send status 200 if recipe does NOT exist
      res.sendStatus(200);
    }

  });

  // add new recipe in postData
  router.post("/", (req, res) => {
    try {
      // Check if recipe already exists. Throw error if it does
      if (recipeCheck(req.body)) {
        throw Error('Recipe already exists!')
      }

      // Recipe does not exist, add it to recipe list
      saveRecipe(req.body);
      res.json(req.body).status(201)

    } catch(e) {
      // set status code, print error message
      res.status(400).send({ error: e.message})
    }

  })

  router.put("/", (req, res) => {
    try {
      // Check if recipe exists. If it does not exist, throw error
      if (recipeCheck(req.body) === false) {
        throw Error('Recipe does not exist!')
      }

      // if recipe exists, allow update
      updateRecipe(req.body)
      res.send(req.body).status(204)

    } catch(e) {
      res.status(404).send({error: e.message})
    }
  })

  return router;
};
