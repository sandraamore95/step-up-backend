const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const favoritesController = require('../controllers/favoriteController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);


//ruta protegida solo accesible por usuario autenticado
router.post('/favorites/:shoeId', requireAuth, favoritesController.addFavorite);



module.exports = router;
