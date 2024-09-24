const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");
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
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app
  .get("/products", async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render("index", { products });
  })
  .get("/products/create", (req, res) => {
    res.render("create.ejs");
  })
  .post("/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/products/${product._id}`);
  })
  .get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.render("show", { product });
  })
  .get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("edit.ejs", { product });
  })
  .put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${product._id}`);
  })
  .delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
  });

app.listen(3000, () => {
  console.log(`listening port http://127.0.0.1:${port}`);
});
