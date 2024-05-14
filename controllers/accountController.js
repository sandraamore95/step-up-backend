const mongoose = require('mongoose');
const FavoriteShoes = require("../models/FavoriteShoesSchema");
const Cart = require("../models/CartSchema");
const shoeController = require('../controllers/shoeController');

async function addFavorite(userData, shoeId) {
    try {
        // Buscar el documento de zapatillas favoritas del usuario
        let favoriteShoes = await FavoriteShoes.findOne({ user: userData.id });

        // Si el usuario no tiene un documento de zapatillas favoritas, crear uno nuevo y guardarlo
        if (!favoriteShoes) {
            favoriteShoes = new FavoriteShoes({
                user: userData.id,
                shoes: [shoeId] // Agregar directamente la nueva zapatilla
            });
            await favoriteShoes.save();
            return { success: true, message: "Zapatilla guardada en favoritos", userData };
        }

        // Verificar si la zapatilla ya está en la lista
        if (favoriteShoes.shoes.includes(shoeId)) {
            return { success: false, message: "La zapatilla ya está en tus favoritos", userData };
        }

        // Agregar la zapatilla al array de zapatillas favoritas y guardar
        favoriteShoes.shoes.push(shoeId);
        await favoriteShoes.save();

        // Opcional: Poblar datos antes de devolverlos (si necesitas retornar los datos poblados)
        await favoriteShoes.populate('shoes');
        await favoriteShoes.populate('user');

        return { success: true, message: "Zapatilla guardada en favoritos", userData };
    } catch (error) {
        console.error("Error al agregar zapatilla como favorita:", error);
        return { success: false, message: "Error al agregar zapatilla como favorita." };
    }
}



async function addToCart(userData, product) {
    const userId = userData.id;
    const { shoeId, quantity } = product;  // Obtiene el ID del producto y la cantidad desde el cuerpo de la solicitud
    console.log(product);
    try {
        const shoeObjectId = await shoeController.getShoeById(shoeId); 
      

        try {
        // Buscar el carrito del usuario
        let cart = await Cart.findOne({ user: userId });

        // Si no existe un carrito para este usuario, crea uno nuevo
        if (!cart) {
            cart = new Cart({
                user: userId,
                products: [{ product: shoeId, quantity }]
            });
        } else {
            // Buscar el producto en el carrito
           
            const productIndex = cart.products.findIndex(item => item.product.equals(shoeObjectId.id));
            // Si ya existe el carrito, busca el producto en el carrito

            console.log(productIndex);

            if (productIndex >= 0) {
                console.log("existe ya en el carrito");
                // Si el producto ya está en el carrito, incrementa la cantidad
                cart.products[productIndex].quantity += quantity;
            } else {
                // Si no está, añade el producto al carrito
                cart.products.push({ product: shoeId, quantity });
            }
        }
        await cart.save();
        return { success: true, message: "Producto añadido al carrito", cart };
    } catch (error) {
        console.error("Error al añadir producto al carrito:", error);
        return { success: false, message: "Error al añadir producto al carrito:" };

    }









       
    } catch (error) {
        console.error('Error al obtener el zapato:', error);
    }
    
   
    
}



module.exports = {
    addFavorite, addToCart
}