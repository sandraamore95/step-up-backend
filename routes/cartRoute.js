const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const cartController = require('../controllers/cartController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);


//ruta protegida solo accesible por usuario autenticado
router.post('/add', requireAuth, cartController.addToCart);
router.put('/update', requireAuth, cartController.manageCartItem);
router.get('/cart-user', requireAuth, cartController.getCart);


module.exports = router;
