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


const manageCartItem = async (req, res) => {
    try {
        console.log("UPDATE O DELETEAR");
        const userId = req.user.id;
        const { product } = req.body.data;

        // Si la cantidad es 0, eliminamos el producto
        if (product.quantity === 0) {
            console.log("El producto se va a eliminar");
            await Cart.findOneAndUpdate(
                { user: userId },
                { $pull: { products: { product: product.product._id, size: product.size } } },
                { new: true }
            );
        } else {
            // Si la cantidad es diferente de 0, actualizamos la cantidad del producto
            console.log("Actualizando la cantidad del producto");
            console.log(product.quantity);
            console.log(product.size);
            try {
                // Buscar si el producto con el nuevo tamaño ya existe en el carrito
                const cart = await Cart.findOne({ user: userId });

                const existingProduct = cart.products.find(
                    (item) => item.product.toString() === product.product._id.toString() && item.size === product.size
                );

                if (existingProduct) {
                    // Si el producto con el mismo tamaño ya existe, simplemente aumentamos la cantidad
                    console.log("Producto encontrado con el mismo tamaño, aumentando cantidad.");
                    existingProduct.quantity += product.quantity;

                    // Guardamos el carrito actualizado
                    await cart.save();
                    console.log("Carrito actualizado con nueva cantidad.");
                } else {
                    // Si el producto no existe con el tamaño, lo agregamos al carrito
                    console.log("Producto con el tamaño no encontrado, añadiendo nuevo producto.");

                    // Crear un nuevo objeto de producto para agregar al carrito
                    cart.products.push({
                        product: product.product._id,
                        size: String(product.size),
                        quantity: product.quantity,
                    });

                    // Guardamos el carrito con el nuevo producto
                    await cart.save();
                    console.log("Carrito actualizado con el nuevo producto.");
                }
            } catch (error) {
                console.error("Error actualizando el carrito:", error);
            }
        }
    } catch (error) {
        console.error("Error en manageCartItem:", error);
        res.status(500).json({ message: 'Error updating cart item' });
    }
};


// Función para actualizar o agregar un elemento al carrito
const updateOrAddCartItem = async (userCart, productDetails, quantity, size) => {
    console.log("estamos aqui para update o deletear ");
    const existingProductIndex = userCart.products.findIndex(cartItem =>
        cartItem.product._id.toString() === productDetails._id.toString() && cartItem.size === size
    );

    if (existingProductIndex >= 0) {
        console.log("El producto ya está en el carrito con la misma talla, aumentamos su cantidad");
        // Si el producto ya está en el carrito, aumentar la cantidad
        userCart.products[existingProductIndex].quantity += quantity;
    } else {
        console.log("El producto no tiene la misma talla");
        // Si el producto no está en el carrito, agregarlo
        const cartItem = {
            product: productDetails._id,
            quantity: quantity,
            size: size
        };
        userCart.products.push(cartItem);
        console.log(userCart);
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
    addToCart, getCart, manageCartItem,
}