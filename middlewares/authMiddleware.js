const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.token; // Leer el token desde las cookies

    if (!token) {
        return res.status(403).json({ message: "Acceso denegado. No se proporcionó token." });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Añadir datos de usuario al objeto de solicitud
        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido o expirado." });
    }
};

module.exports = requireAuth;
