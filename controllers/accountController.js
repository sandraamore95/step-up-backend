
const guardarEnListaDeseos = (userData, zapatillaId) => {
   

    return {
        message: "Zapatilla guardada en la lista de deseos.",
        userData: userData,
        zapatillaId: zapatillaId
    };
};


module.exports = {
  guardarEnListaDeseos
}