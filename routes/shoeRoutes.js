const express = require('express');
const router = express.Router();
const cors = require('../helpers/corsConfig');
const shoeController = require('../controllers/shoeController');

//middlewares 
router.use(cors);

router.get('/shoes', async (req, res) => {
    try {
        const shoes = await shoeController.getAllShoes();
        res.json(shoes);
    } catch (error) {
        console.error('Error al obtener las zapatillas:', error);
        res.status(500).json({ error: 'Error al obtener las zapatillas' });
    }
});

router.get('/shoes/:id', async (req, res) => {
    try {
        const { id } = req.params; // Obtén el ID del parámetro de la URL
        const shoe = await shoeController.getShoeById(id); // Llama a la función del controlador para obtener el zapato por ID
        res.json(shoe); // Envía el zapato como respuesta
        // Incrementar la popularidad de la zapatilla
        await shoeController.incrementPopularity(id);
    } catch (error) {
        console.error('Error al obtener el zapato por ID:', error);
        res.status(500).json({ error: 'Error al obtener el zapato por ID' });
    }
});




module.exports = router;
