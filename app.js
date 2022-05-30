const express = require("express");
const app = express();

const mockData = require("./data.json");

// simple GET request that returns a list of users
// use /url to trigger callback return json data
app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
})

app.get("/recipes", (req, res, next) => {

  res.json(mockData);
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
