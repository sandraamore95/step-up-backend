const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
    brand: String,
    model: String,
    sizes: [Number],
    price: Number,
    color: String,
    popularity:Number,
    images: [String],
    description:String
});

module.exports = mongoose.model('Shoe', shoeSchema);