const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");

// Models
const Product = require("./models/product");

// connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/blogme")
  .then((result) => {
    console.log(`connected to mongodb server`);
  })
  .catch((err) => {
    console.log(err);
  });

// set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("index", { products });
});

app.listen(3000, () => {
  console.log(`listening port http://127.0.0.1:${port}`);
});
