const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name: String,
    description: String,
    includedShoes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shoe' }]
});

module.exports = mongoose.model('Collection', collectionSchema);
