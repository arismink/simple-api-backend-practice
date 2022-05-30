const express = require("express");
const app = express();

// Middleware
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Routes
const recipeRouter = require("./routes/recipes")

// configure app to use middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/recipes", recipeRouter());

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
