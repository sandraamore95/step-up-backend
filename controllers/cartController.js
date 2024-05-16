const mongoose = require('mongoose');
const Cart = require("../models/CartSchema");
const shoeController = require('../controllers/shoeController');


async function addToCart(req, res) {
    const userId = req.user.id; // Asumiendo que `req.user` contiene los datos del usuario autenticado
    const { shoeId, quantity } = req.body; // Obtiene el ID del producto y la cantidad desde el cuerpo de la solicitud

    try {
        // Asegurar que el zapato exista
        const shoe = await shoeController.getShoeById(shoeId);
        if (!shoe) {
            return res.status(404).json({ success: false, message: "Zapato no encontrado." });
        }

        // Buscar o crear carrito
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({
                user: userId,
                products: [{ product: shoeId, quantity }]
            });
        } else {
            // Buscar el producto en el carrito
             const productIndex = cart.products.findIndex(item => item.product.equals(shoe.id));
            if (productIndex >= 0) {
                // Incrementar la cantidad si el producto ya está en el carrito
                cart.products[productIndex].quantity += quantity;
            } else {
                // Añadir el producto al carrito si no está
                cart.products.push({ product: shoeId, quantity });
            }
        }
        await cart.save();
        res.status(201).json({ success: true, message: "Producto añadido al carrito", cart });
    } catch (error) {
        console.error("Error al añadir producto al carrito:", error);
        res.status(500).json({ success: false, message: "Error al añadir producto al carrito." });
    }
}

module.exports = {
   addToCart
}