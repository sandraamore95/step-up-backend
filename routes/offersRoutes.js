const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const offerController = require('../controllers/offerController');

//middlewares 
router.use(cors);

router.get('/offers', async (req, res) => {
    try {
        const offers = await offerController.getAllOffers();
        res.json(offers);
    } catch (error) {
        console.error('Error al obtener las offers:', error);
        res.status(500).json({ error: 'Error al obtener las offers' });
    }
});

router.get('/offers/:title', async (req, res) => {
    try {
        const { title } = req.params; // Obtén el name del parámetro de la URL
        const offers = await offerController.getOfferByName(title); // Llama a la función del controlador para obtener el offers por name
        res.json(offers); 
    } catch (error) {
        console.error('Error al obtener la offers por name:', error);
        res.status(500).json({ error: 'Error al obtener la offers por name:' });
    }
});

module.exports = router;
