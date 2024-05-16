const  Collection = require("../models/Collection");

const getAllCollections = async (req, res) => {
    try {
        const collections = await Collection.find().populate('includedShoes');
        res.json(collections);
    } catch (error) {
        console.error('Error al obtener las colecciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getCollectionByName = async (req, res) => {
    const name = req.params.name; // Asumiendo que el nombre se pasa como parámetro de la ruta
    try {
        const collection = await Collection.findOne({ name });
        if (!collection) {
            return res.status(404).json({ message: 'Colección no encontrada' });
        }
        res.json(collection);
    } catch (error) {
        console.error('Error al obtener la colección por nombre:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


module.exports = {
    getAllCollections,getCollectionByName
}