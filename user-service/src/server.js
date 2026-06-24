require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Read PORT from .env
const PORT = process.env.PORT || 5001;

// Home API
app.get("/", (req, res) => {
    res.json({
        message: "User Service is Running Successfully 🚀",
        service: "User Service",
        version: "1.0.0"
    });
});

// Health Check API
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        service: "User Service"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 User Service started on port ${PORT}`);
});