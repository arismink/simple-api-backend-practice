const router = require("express").Router();

const res = require("express/lib/response");
const mockData = require("../data/data.json");
const data = mockData.recipes

const { recipeCheck } = require("../helpers/data-helpers")

module.exports = () => {
  // return an array of recipe names
  router.get("/", (req, res) => {
    const recipeNames = [];

    for (recipe of data) {
      recipeNames.push(recipe.name)
    }
    res.json({recipeNames});
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

      res.json({details});

    } catch (e) {
      // Send status 200 if recipe does NOT exist
      res.sendStatus(200);
    }

  });

  // add new recipe in postData
  router.post("/", (req, res) => {
    try {
      // Check if recipe already exists
      if (recipeCheck(req.body, true)) {
        throw Error('Recipe already exists!')
      }

      res.json(req.body)

    } catch(e) {
      // set status code, print error message
      res.status(400).send({ error: e.message})
    }

  })

  router.put("/", (req, res) => {
    try {
      if (recipeCheck(req.body, false) === false) {
        throw Error('Recipe does not exist!')
      }
    } catch(e) {
      res.status(404).send({error: e.message})
    }
  })

  return router;
};
