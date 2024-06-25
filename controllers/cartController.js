const mongoose = require('mongoose');
const Cart = require("../models/CartSchema");
const Shoe = require('../models/Shoe');


const addToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { cart } = req.body; // Obtén el arreglo de productos desde el cuerpo de la solicitud

        console.log(cart);
        // Verifica si hay datos en cart
        if (!cart || !Array.isArray(cart) || cart.length === 0) {
            return res.status(400).json({ success: false, message: 'No se han proporcionado productos válidos.' });
        }

        // Crear un arreglo para almacenar los objetos del carrito
        const cartItems = [];

        // Iterar sobre cada producto en el carrito
        for (const item of cart) {
            const { product, quantity, size } = item;
console.log(item);
            // Verificar si el producto tiene todos los campos necesarios
            if (!product || !quantity || !size) {
                console.error('Producto incompleto:', item);
                continue; // O manejar el error según sea necesario
            }

            // Construir el objeto para el carrito
            const cartItem = {
                products: cart.map(item => ({
                    product: item.product._id, // Aquí asumimos que item.product._id es el ID del producto en MongoDB
                    quantity: item.quantity,
                    size: item.size
                }))
            };
            
            console.log(cartItem);
        }

        // Aquí puedes hacer algo con cartItems, como guardarlo en la base de datos
        console.log('Items de carrito a guardar:', cartItems);

        // Ejemplo: guardar cartItems en MongoDB
        // await Cart.findOneAndUpdate({ user: userId }, { products: cartItems }, { upsert: true });

        res.status(200).json({ success: true, message: 'Productos agregados al carrito correctamente.' });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ success: false, message: 'Error al procesar la solicitud.' });
    }
};

/*

 // Asegurar que el zapato exista
        const shoe = await Shoe.findById(shoeId);
        if (!shoe) {
            return res.status(404).json({ success: false, message: "Zapato no encontrado." });
        }
        console.log("el zapato existe ", shoeId);
 // Buscar o crear carrito
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            console.log("no existe el cart ");
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


*/











const getCart = async (req, res) => {
    const userId = req.user.id;

    try {
        // Buscar el carrito del usuario
        const cart = await Cart.findOne({ user: userId }).populate('products.product');

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
    addToCart, getCart
}