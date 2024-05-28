const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const shoeController = require('../controllers/shoeController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);

router.get('/', shoeController.getAllShoes);
router.get('/:id', shoeController.getShoeById);
router.get('/name/:model', shoeController.getShoeByModel);




module.exports = router;
