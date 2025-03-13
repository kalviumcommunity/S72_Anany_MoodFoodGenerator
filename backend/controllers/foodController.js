const Food = require("../models/foodModel"); // Import MongoDB model

// Get all food items
exports.getFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch foods" });
    }
};

// Add a new food item
exports.addFood = async (req, res) => {
    try {
        const { name, mood, description } = req.body;
        const newFood = new Food({ name, mood, description });
        await newFood.save();
        res.status(201).json(newFood);
    } catch (error) {
        res.status(500).json({ error: "Failed to add food" });
    }
};

// Update a food item by ID
exports.updateFood = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFood = await Food.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedFood) return res.status(404).json({ error: "Food not found" });
        res.status(200).json(updatedFood);
    } catch (error) {
        res.status(500).json({ error: "Failed to update food" });
    }
};

// Delete a food item by ID
exports.deleteFood = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFood = await Food.findByIdAndDelete(id);
        if (!deletedFood) return res.status(404).json({ error: "Food not found" });
        res.status(200).json({ message: "Food deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete food" });
    }
};

// Get foods based on mood
exports.getFoodsByMood = async (req, res) => {
    try {
        const { mood } = req.params;
        const foods = await Food.find({ mood: mood.toLowerCase() });
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch foods by mood" });
    }
};
