const Offer = require("../models/Offer");

const getAllOffers = async () => {
    try {
        const offers = await Offer.find().populate('includedShoes');
        return offers;
    } catch (error) {
        console.error('Error al obtener las offers:', error);
        throw error;
    }
}
const getOfferByName = async (title) => {
    try {
        const offer = await Collection.findOne({ title });
        return offer;
    } catch (error) {
        console.error('Error al obtener el offer por name:', error);
        throw error;
    }
}



module.exports = {
    getAllOffers,getOfferByName
}