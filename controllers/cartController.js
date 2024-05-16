const mongoose = require('mongoose');
const Cart = require("../models/CartSchema");
const Shoe = require('../models/Shoe');
const { get } = require('../routes/shoeRoutes');


async function addToCart(req, res) {
    const userId = req.user.id; 
    const { product } = req.body; // Obtén el objeto 'product' del cuerpo de la solicitud
    const { shoeId, quantity } = product;

    try {
        // Asegurar que el zapato exista
        const shoe = await Shoe.findById(shoeId);
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
        res.status(201).json({ success: true, message: "Producto añadido al carrito" });
    } catch (error) {
        console.error("Error al añadir producto al carrito:", error);
        res.status(500).json({ success: false, message: "Error al añadir producto al carrito." });
    }
}

async function getCart(req, res) {
    const userId = req.user.id;

    try {
        // Buscar el carrito del usuario
        const cart = await Cart.findOne({ user: userId }).populate('products.product', 'name price');

        if (!cart) {
            return res.status(404).json({ success: false, message: "Carrito no encontrado para este usuario." });
        }

        res.status(200).json({ success: true, cart });
    } catch (error) {
        console.error("Error al obtener el carrito del usuario:", error);
        res.status(500).json({ success: false, message: "Error al obtener el carrito del usuario." });
    }
}

module.exports = {
   addToCart,getCart
}