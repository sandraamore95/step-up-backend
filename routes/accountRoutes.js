const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const accountController = require('../controllers/accountController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);


//ruta protegida solo accesible por usuario autenticado
router.post('/wishList/:zapatillaId', requireAuth, (req, res) => {
    const userData = req.user;
    const zapatillaId = req.params.zapatillaId; 
    const result = accountController.guardarEnListaDeseos(userData, zapatillaId);
    res.json(result);
});

module.exports = router;
