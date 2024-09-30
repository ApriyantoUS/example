const mongoose = require("mongoose");

// Buat Schema Example
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Baju", "Celana", "Aksesoris", "Jaket"],
  },
});

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const sectionSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  paragraph: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  list: {
    type: [String],
    default: [],
  },
  steps: {
    type: [String],
    default: [],
  },
});

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: [sectionSchema],
  author: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    enum: ["Pemrograman", "Teknologi", "Kesehatan", "Olahraga", "Hiburan", "Game", "Komputer", "Bisnis", "Politik", "Sejarah", "Ekonomi", "Pendidikan", "Kuliner", "Pengembangan Web", "Keluarga", "Filsafat", "Motivasi", "Lainnya"],
  },
  comments: [commentSchema],
});

// Buat Model
const Product = mongoose.model("Product", productSchema);
const Article = mongoose.model("Article", articleSchema);

module.exports = Product;
module.exports = Article;
