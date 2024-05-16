const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const accountController = require('../controllers/accountController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);


//ruta protegida solo accesible por usuario autenticado
router.post('/favorites/:shoeId', requireAuth, favoritesController.addFavorite);
router.post('/cart/add', requireAuth, cartController.addToCart);


module.exports = router;
