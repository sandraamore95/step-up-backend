const bcrypt=require('bcrypt')

const hashPassword = async (password) => {
    try {
        // Generar un salt con un factor de coste de 12
        const salt = await bcrypt.genSalt(12);
        // Generar el hash utilizando el salt
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        // Manejar errores si ocurren durante el proceso de hash
        console.error('Error al generar el hash de la contraseña:', error);
        throw error;
    }
};

const comparePassword=  async (passw,hashed)=>{
    return bcrypt.compare(passw,hashed)
}

module.exports={
    hashPassword,comparePassword
}