const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
    brand: String,
    model: String,
    size: Number,
    price: Number,
    color: String,
    popularity:Number,
    images: [String]
});

module.exports = mongoose.model('Shoe', shoeSchema);