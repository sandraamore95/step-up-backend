const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const accountController = require('../controllers/accountController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);


//ruta protegida solo accesible por usuario autenticado
router.post('/wishList/:zapatillaId', requireAuth, async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        const zapatillaId = req.params.zapatillaId;
        console.log(zapatillaId);
       
        const resultado = await accountController.addFavorite(userData, zapatillaId);
        
        if (resultado.success) {
            //si es correcto
            res.json({ success: true, message: resultado.message, usuario: resultado.userData });
        } else {
            // Si ha fallado
            res.status(400).json({ success: false, message: resultado.message });
        }
    } catch (error) {
        console.error("Error en ruta /wishList:", error);
        res.status(500).json({ success: false, message: "Error en ruta /wishList. Inténtalo de nuevo más tarde." });
    }
});

router.post('/addCart', requireAuth, async (req, res) => {
    try {
        const userData = req.user;
        const product = req.body.product; //le llega la zapatilla + cantidad

        console.log(userData);
        
        const resultado = await accountController.addToCart(userData, product);

        if (resultado.success) {
            // Si es correcto
            res.json({ success: true, message: resultado.message, cart: resultado.cart });
        } else {
            // Si ha fallado
            res.status(400).json({ success: false, message: resultado.message });
        }
    } catch (error) {
        console.error("Error en ruta /addCart:", error);
        res.status(500).json({ success: false, message: "Error en ruta /addCart. Inténtalo de nuevo más tarde." });
    }
});

module.exports = router;
