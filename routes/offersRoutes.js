const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const offerController = require('../controllers/offerController');

//middlewares 
router.use(cors);

router.get('/offers', offerController.getAllOffers);
router.get('/offers/name/:title', offerController.getOfferByName);

module.exports = router;
