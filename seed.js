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

const seedProducts = [
  {
    name: "Kemeja Flanel",
    brand: "Hollister",
    price: 750000,
    color: "biru muda",
    category: "Baju",
  },
  {
    name: "Celana Chino",
    brand: "Levi's",
    price: 900000,
    color: "krem",
    category: "Celana",
  },
  {
    name: "Sweater",
    brand: "Gap",
    price: 650000,
    color: "merah muda",
    category: "Jaket",
  },
  {
    name: "Tas Ransel",
    brand: "Herschel",
    price: 1500000,
    color: "biru",
    category: "Aksesoris",
  },
  {
    name: "Kacamata Aviator",
    brand: "Ray-Ban",
    price: 2000000,
    color: "emas",
    category: "Aksesoris",
  },
  {
    name: "Baju Renang",
    brand: "Speedo",
    price: 500000,
    color: "biru tua",
    category: "Baju",
  },
  {
    name: "Celana Panjang",
    brand: "New Era",
    price: 350000,
    color: "hitam",
    category: "Celana",
  },
  {
    name: "Rompi",
    brand: "Zara",
    price: 850000,
    color: "abu-abu",
    category: "Baju",
  },
  {
    name: "Jas",
    brand: "Hugo Boss",
    price: 4500000,
    color: "hitam",
    category: "Baju",
  },
];

Product.insertMany(seedProducts)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

seedProducts.forEach(async (product) => {
  const existingProduct = await Product.findOne({ name: product.name });
  if (!existingProduct) {
    await Product.create(product);
  }
});

Product.deleteMany({})
  .then(() => {
    return Product.insertMany(seedProducts);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
