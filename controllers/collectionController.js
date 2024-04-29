const  Collection = require("../models/Collection");

const getAllCollections = async () => {
    try {
        const collection = await Collection.find().populate('includedShoes');;
        return collection;
    } catch (error) {
        console.error('Error al obtener las colecciones:', error);
        throw error;
    }
}
const getCollectionByName = async (name) => {
    try {
        const collection = await Collection.findOne({ name });
        return collection;
    } catch (error) {
        console.error('Error al obtener la coleccion  por name:', error);
        throw error;
    }
}



module.exports = {
    getAllCollections,getCollectionByName
}