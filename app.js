const express = require("express");
const app = express();

// Middleware
const bodyParser = require("body-parser");
const morgan = require("morgan");

// configure app to use middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("dev"));

// Routes
const recipeRouter = require("./routes/recipes")

app.use("/recipes", recipeRouter());

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
