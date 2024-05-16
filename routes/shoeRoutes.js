const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const shoeController = require('../controllers/shoeController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);

router.get('/shoes', shoeController.getAllShoes);
router.get('/shoes/:id', shoeController.getShoeById);
router.get('/shoes/name/:model', shoeController.getShoeByModel);
//ruta protegida con autentificacion 
router.get('/pruebaAuth', requireAuth, shoeController.pruebaPermission);



module.exports = router;
