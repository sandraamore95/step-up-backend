const User = require("../models/User");


const guardarEnListaDeseos = async (userData, shoeId) => {
    // Buscar al usuario por su ID y asegurarse de que exista
    const usuario = await User.findById(userData.id);
    console.log(usuario);
    if (!usuario) {
        return { success: false, message: "Usuario no encontrado." };
    }

    // Verificar si la zapatilla ya está en la lista de deseos del usuario
    const shoeIndex = usuario.favoriteShoes.indexOf(shoeId);
    if (shoeIndex === -1) {
        usuario.favoriteShoes.push(shoeId);
        await usuario.save();
        return { success: true, message: "Zapatilla guardada en la lista de deseos.", usuario };
    } else {
        return { success: false, message: "La zapatilla ya está en la lista de deseos." };
    }
};

module.exports = {
  guardarEnListaDeseos
}