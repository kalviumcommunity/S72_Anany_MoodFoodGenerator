const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");

// CRUD Routes for Mood-Based Food Recommendations
router.get("/foods", foodController.getFoods);          // Get all foods
router.post("/foods", foodController.addFood);          // Add a new food item
router.put("/foods/:id", foodController.updateFood);    // Update a food item by ID
router.delete("/foods/:id", foodController.deleteFood); // Delete a food item by ID

// Additional Route: Get foods based on mood
router.get("/foods/mood/:mood", foodController.getFoodsByMood);

module.exports = router;
