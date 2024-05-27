const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const favoritesController = require('../controllers/favoriteController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);


//rutas protegidas solo accesible por usuario autenticado
router.post('/favorites/:shoeId', requireAuth, favoritesController.addFavorite);
router.get('/favoriteShoes/', requireAuth, favoritesController.getFavoriteShoes);
router.get('/existFavorites/:shoeId', requireAuth, favoritesController.existsFavorite);


module.exports = router;
