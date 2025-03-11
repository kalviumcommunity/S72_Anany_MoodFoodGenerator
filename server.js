require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const foodRoutes = require("./routes/routes"); // Import API routes

const app = express();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); // Exit process if connection fails
    }
};

connectDB();

// Routes
app.get("/", (req, res) => {
    res.json({
        message: "First Page!",
        databaseStatus: mongoose.connection.readyState === 1 ? "Connected" : "Not Connected",
    });
});

app.get("/ping", (req, res) => {
    res.send("Hello World!");
});

// Use API routes
app.use("/api", foodRoutes);

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
