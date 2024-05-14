const FavoriteShoes = require("../models/FavoriteShoesSchema");

async function guardarEnFavoritos(userData, shoeId) {
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

module.exports = {
    guardarEnFavoritos
}