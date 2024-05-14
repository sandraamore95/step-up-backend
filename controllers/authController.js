const User = require("../models/User");
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')



const test = (req, res) => {
    res.send('test is working')
}

const test2 = (req, res) => {
    console.log("test2 is working!!");
}





//-----------------------------------------
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check if name not null
        if (!name) {
            return res.json({
                error: 'name is required!'
            })
        }
        //check if name not null
        if (!password || password.length < 6) {
            return res.json({
                error: 'password is required or should be at least 6 characters long!'
            })
        }

        //check email if exist in db 
        const exist_email = await User.findOne({ email })
        if (exist_email) {
            return res.json({
                error: 'email is taken already!'
            })
        }

        //bcrypt password 
        const hashedPassword = await hashPassword(password);

        //create with MONGODB
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })
        return res.json(user);

    } catch (error) {
        console.log(error);
    }
}



const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario existe
        const user_exist = await User.findOne({ email });
        if (!user_exist) {
            return res.json({
                error: '¡Usuario no encontrado!'
            });
        }

        // Comparar contraseñas
        const hash = await hashPassword(password);
        const passwMatch = await comparePassword(password,user_exist.password);
        
        if (passwMatch) {
            // Si las contraseñas coinciden, generar el token JWT
            jwt.sign(
                { email: user_exist.email, id: user_exist._id, name: user_exist.name },
                process.env.JWT_SECRET,
                {},
                (err, token) => {
                    if (err) throw err;
                    // Devolver el token junto con los datos del usuario
                    res.cookie('token', token).json(user_exist);
                }
            );
        } else {
            // Si las contraseñas no coinciden, devolver un mensaje de error
            console.log("Las contraseñas no coinciden");
            res.json({
                error: '¡La contraseña no coincide!'
            });
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error del servidor al iniciar sesión' });
    }
};


const profile = async (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    }else{
        res.json(null)
    }

}

const logout = async (req, res) => {
    res.clearCookie('token'); // Elimina la cookie que contiene el token de autenticación
    res.status(200).json({ message: 'Logout exitoso' });
}


module.exports = {
    test, test2, register, login, profile,logout
}