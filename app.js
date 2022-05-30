const express = require("express");
const app = express();

const mockData = require("./data.json");

// simple GET request that returns a list of users
// use /url to trigger callback return json data
app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
})

app.get("/recipes", (req, res, next) => {
  // return object named recipeNames
  // object should contain all recipeNames

  // const recipeNames = Object.values(mockData.name)
  const recipeNames = [];
  const data = mockData.recipes

  for (recipe of data) {
    recipeNames.push(recipe.name)
  }

  res.json({recipeNames});
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
