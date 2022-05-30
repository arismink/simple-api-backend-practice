const express = require("express");
const app = express();

const recipeRouter = require("./routes/recipes")

// simple GET request that returns a list of users
// use /url to trigger callback return json data
app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
})

app.use("/recipes", recipeRouter(db));

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
