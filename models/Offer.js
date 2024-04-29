const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    title: String,
    details: String,
    includedShoes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shoe' }]
});

module.exports = mongoose.model('Offer', offerSchema);
