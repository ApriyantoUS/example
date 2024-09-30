const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// Connect User

// Models
const Product = require("./models/product");
const Article = require("./models/product");

// Connect to mongodb
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

// ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app
  .get("/blogs", async (req, res) => {
    const articles = await Article.find({});
    console.log(articles);
    res.render("index", { articles });
  })
  .get("/products/create", (req, res) => {
    res.render("create.ejs");
  })
  .post("/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/products/${product._id}`);
  })
  .get("/blogs/:id", async (req, res) => {
    const { id } = req.params;
    const articles = await Article.findById(id);
    console.log(articles);
    if (!articles) {
      return res.status(404).send("Blog not found");
    }
    res.render("show", { articles });
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

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/*", (req, res) => {
  res.send("<div style='text-align:center; font-size: 50px'>404 </br> NOT FOUND</div>");
});

app.listen(3000, () => {
  console.log(`listening port http://127.0.0.1:${port}`);
});
