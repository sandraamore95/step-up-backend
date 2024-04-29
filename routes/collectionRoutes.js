const express = require('express');
const router = express.Router();
const cors = require('../helpers/corsConfig');
const collectionController = require('../controllers/collectionController');

//middlewares 
router.use(cors);

router.get('/collections', async (req, res) => {
    try {
        const collections = await collectionController.getAllCollections();
        res.json(collections);
    } catch (error) {
        console.error('Error al obtener las colecciones:', error);
        res.status(500).json({ error: 'Error al obtener las colecciones' });
    }
});

router.get('/collections/:name', async (req, res) => {
    try {
        const { name } = req.params; // Obtén el name del parámetro de la URL
        const collection = await collectionController.getCollectionByName(name); // Llama a la función del controlador para obtener el coleccion por name
        res.json(collection); 
    } catch (error) {
        console.error('Error al obtener la coleccion por name:', error);
        res.status(500).json({ error: 'Error al obtener la coleccion por name:' });
    }
});




module.exports = router;
