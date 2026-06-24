require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5002;

// Sample Products API
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 65000
  },
  {
    id: 2,
    name: "Mouse",
    price: 500
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500
  },
  {
    id: 4,
    name: "Monitor",
    price: 12000
  }
];

// Home API
app.get("/", (req, res) => {
  res.json({
    message: "Product Service is Running Successfully 🚀"
  });
});

// Products API
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`🚀 Product Service started on port ${PORT}`);
});