const User = require("../models/User");


const guardarEnListaDeseos = async (userData, shoeId) => {
    try {
        // Buscar al usuario por su ID y asegurarse de que exista
        const usuario = await User.findById(userData._id);
        if (!usuario) {
            return { message: "Usuario no encontrado." };
        }

        // Verificar si la zapatilla ya está en la lista de deseos del usuario
        const shoeIndex = usuario.favoriteShoes.indexOf(shoeId);
        if (shoeIndex === -1) {
            usuario.favoriteShoes.push(shoeId);
            await usuario.save();

            return { message: "Zapatilla guardada en la lista de deseos." };
        } else {
            // Si la zapatilla ya está en la lista de deseos -> error
            return { message: "La zapatilla ya está en la lista de deseos." };
        }
    } catch (error) {
        console.error("Error al guardar en lista de deseos:", error);
        return { message: "Error al guardar en lista de deseos." };
    }
};

module.exports = {
  guardarEnListaDeseos
}