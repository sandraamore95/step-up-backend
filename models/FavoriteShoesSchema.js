const mongoose = require('mongoose');

const favoriteShoesSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referencia al usuario al que pertenecen las zapatillas favoritas
    shoes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shoe' }] // Array de referencias a las zapatillas favoritas
});

module.exports = mongoose.model('FavoriteShoes', favoriteShoesSchema);
