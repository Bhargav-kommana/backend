require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5003;

// Temporary data
let orders = [];

// Home
app.get("/", (req, res) => {

    res.json({
        message: "Order Service Running Successfully 🚀"
    });

});

// Get Orders
app.get("/orders", (req, res) => {

    res.json(orders);

});

// Create Order
app.post("/orders", (req, res) => {

    const order = {

        id: orders.length + 1,

        userId: req.body.userId,

        productId: req.body.productId,

        quantity: req.body.quantity

    };

    orders.push(order);

    res.status(201).json({

        message: "Order Created Successfully",

        order

    });

});

app.listen(PORT, () => {

    console.log(`🚀 Order Service started on port ${PORT}`);

});