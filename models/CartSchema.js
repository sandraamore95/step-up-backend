const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Referencia al usuario al que pertenece el carrito
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Shoe' }, // Referencia a la zapatilla 
            quantity: { type: Number, default: 1 } // Cantidad del producto en el carrito
        }
    ]
});

module.exports = mongoose.model('Cart', cartSchema);
