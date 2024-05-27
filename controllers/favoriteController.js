const mongoose = require('mongoose');
const FavoriteShoes = require("../models/FavoriteShoesSchema");


const addFavorite = async (req, res) => {
    const userData = req.user;  
    const shoeId = req.params.shoeId; 

    try {
        // Buscar el documento de zapatillas favoritas del usuario
        let favoriteShoes = await FavoriteShoes.findOne({ user: userData.id });

        // Si no existe, crear un nuevo documento
        if (!favoriteShoes) {
            favoriteShoes = new FavoriteShoes({
                user: userData.id,
                shoes: [shoeId]
            });
            await favoriteShoes.save();
            return res.status(201).json({ success: true, message: "Zapatilla añadida a favoritos." });
        }

        // Verificar si la zapatilla ya está en la lista
        if (favoriteShoes.shoes.includes(shoeId)) {
            return res.status(409).json({ success: false, message: "La zapatilla ya está en tus favoritos." });
        }
        favoriteShoes.shoes.push(shoeId);
        await favoriteShoes.save();

        return res.status(201).json({ success: true, message: "Zapatilla añadida a favoritos." });
    } catch (error) {
        console.error("Error al agregar zapatilla a favoritos:", error);
        res.status(500).json({ success: false, message: "Error al agregar zapatilla a favoritos." });
    }
}


const getFavoriteShoes = async (req, res) => {
    const userId = req.user.id;

    try {
        // Buscar las zapatillas favoritas del usuario
        const favoriteShoes = await FavoriteShoes.findOne({ user: userId }).populate('shoes');

        if (!favoriteShoes) {
            return res.status(404).json({ success: false, message: "No se encontraron zapatillas favoritas para este usuario." });
        }

        // Devolver las zapatillas favoritas encontradas
        return res.status(200).json({ success: true, favoriteShoes });
    } catch (error) {
        console.error("Error al obtener zapatillas favoritas:", error);
        return res.status(500).json({ success: false, message: "Error interno del servidor al obtener zapatillas favoritas." });
    }
}

const existsFavorite = async (req, res) => {
    const userId = req.user.id;  
    const shoeId = req.params.shoeId; 
    try {
        console.log(userId);
        console.log(shoeId);
        const favorite = await FavoriteShoes.findOne({ user: userId ,shoes:shoeId })
        if (favorite) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    } catch (error) {
        console.error('Error verificando favoritos:', error);
        res.status(500).json({ error: 'Error verificando favoritos' });
    }
};


module.exports = {
    addFavorite,getFavoriteShoes,existsFavorite
}