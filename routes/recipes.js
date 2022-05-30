const router = require("express").Router();

const res = require("express/lib/response");
const mockData = require("../data.json");
const data = mockData.recipes

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

    } catch (error) {
      // Send status 200 if recipe does NOT exist
      res.sendStatus(200);
    }

  });

  router.post("/", (req, res) => {
    res.json(req.body);
    console.log('req!:', req.body);
    res.end


  })


  return router;
};
