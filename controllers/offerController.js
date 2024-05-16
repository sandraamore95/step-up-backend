const Offer = require("../models/Offer");

const getAllOffers = async (req, res) => {
    try {
        const offers = await Offer.find().populate('includedShoes');
        res.json(offers);
    } catch (error) {
        console.error('Error al obtener las ofertas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getOfferByName = async (req, res) => {
    const title = req.params.title; 
    try {
        const offer = await Collection.findOne({ title });
        if (!offer) {
            return res.status(404).json({ message: 'Oferta no encontrada' });
        }
        res.json(offer);
    } catch (error) {
        console.error('Error al obtener la oferta por nombre:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


module.exports = {
    getAllOffers,getOfferByName
}