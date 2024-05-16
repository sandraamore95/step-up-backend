const mongoose = require('mongoose');
const FavoriteShoes = require("../models/FavoriteShoesSchema");

async function addFavorite(req, res) {
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
module.exports = {
    addFavorite
}