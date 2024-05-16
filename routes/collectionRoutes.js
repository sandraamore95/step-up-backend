const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const collectionController = require('../controllers/collectionController');

//middlewares 
router.use(cors);

router.get('/collections', collectionController.getAllCollections);
router.get('/collections/name/:name', collectionController.getCollectionByName);



module.exports = router;
