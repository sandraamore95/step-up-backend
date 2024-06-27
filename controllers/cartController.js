const mongoose = require('mongoose');
const Cart = require("../models/CartSchema");
const Shoe = require('../models/Shoe');

const addToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { cart } = req.body;

        // Verificar si hay datos en cart
        if (!cart || !Array.isArray(cart) || cart.length === 0) {
            return res.status(400).json({ success: false, message: 'No se han proporcionado productos válidos.' });
        }

        // Buscar o crear el carrito del usuario
        let userCart = await findOrCreateUserCart(userId);

        // Procesar cada producto en el carrito
        await Promise.all(cart.map(async (item) => {
            const { product, quantity, size } = item;

            // Verificar y obtener detalles del producto
            const productDetails = await findProductDetails(product);

            // Si no se encuentra el producto, manejar el error
            if (!productDetails) {
                console.error('Producto no encontrado:', product);
                return;
            }

            // Actualizar o agregar producto al carrito
            await updateOrAddCartItem(userCart, productDetails, quantity, size);
        }));

        // Guardar el carrito actualizado en la base de datos
        await userCart.save();

        // Responder con el carrito actualizado
        const populatedCart = (await userCart.populate('products.product'));
        res.status(200).json({ success: true, cart: populatedCart });

    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ success: false, message: 'Error al procesar la solicitud.' });
    }
};


// Función para buscar o crear el carrito del usuario
const findOrCreateUserCart = async (userId) => {
    let userCart = await Cart.findOne({ user: userId }).populate('products.product');
    if (!userCart) {
        console.log("No tiene carrito. Creando uno nuevo.");
        userCart = new Cart({ user: userId, products: [] });
    }
    return userCart;
};

// Función para buscar detalles del producto por ID
const findProductDetails = async (productId) => {
    try {
        const productDetails = await Shoe.findById(productId);
        return productDetails;
    } catch (error) {
        console.error('Error al buscar detalles del producto:', error);
        return null;
    }
};

// Función para actualizar o agregar un elemento al carrito
const updateOrAddCartItem = async (userCart, productDetails, quantity, size) => {
    const existingProductIndex = userCart.products.findIndex(cartItem =>
        cartItem.product._id.toString() === productDetails._id.toString() && cartItem.size === size
    );

    if (existingProductIndex >= 0) {
        console.log("El producto ya está en el carrito con la misma talla, aumentamos su cantidad");
        // Si el producto ya está en el carrito, aumentar la cantidad
        userCart.products[existingProductIndex].quantity += quantity;
    } else {
        // Si el producto no está en el carrito, agregarlo
        const cartItem = {
            product: productDetails._id,
            quantity: quantity,
            size: size
        };
        userCart.products.push(cartItem);
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