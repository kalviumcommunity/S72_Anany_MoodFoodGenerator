const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mood: { type: String, required: true },
    description: { type: String }
});

module.exports = mongoose.model("Food", foodSchema);
