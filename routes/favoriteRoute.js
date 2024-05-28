const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const favoritesController = require('../controllers/favoriteController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);


//rutas protegidas solo accesible por usuario autenticado
router.get('/', requireAuth, favoritesController.getFavoriteShoes);
router.post('/add/:shoeId', requireAuth, favoritesController.addFavorite);
router.get('/existFavorites/:shoeId', requireAuth, favoritesController.existsFavorite);
router.delete('/delete/:shoeId', requireAuth,favoritesController.deleteFavorite);

module.exports = router;
