const  Shoe = require("../models/Shoe");
const Collection = require('../models/Collection');
const Offer = require('../models/Offer');
const { shoesData, collectionsData, offersData } = require("../data/initialData");


// Función para insertar masivamente toda la DATA DE LA TIENDA
const insertInitialData = async () => {
    try {
        // Insertar zapatillas iniciales si no existen
        if (await Shoe.countDocuments() === 0) {
            await Shoe.insertMany(shoesData);
            console.log('Initial shoes inserted successfully!');
        }

        // Insertar colecciones iniciales si no existen
        if (await Collection.countDocuments() === 0) {
            // Iterar sobre las colecciones y agregar las zapatillas correspondientes por su nombre
            for (const collection of collectionsData) {
                const includedShoes = await Shoe.find({ model: { $in: collection.includedShoes } });
                const newCollection = new Collection({
                    name: collection.name,
                    description: collection.description,
                    includedShoes: includedShoes.map(shoe => shoe._id)
                });
                await newCollection.save();
            }
            console.log('Initial collections inserted successfully!');
        }

        // Insertar ofertas iniciales si no existen
        if (await Offer.countDocuments() === 0) {
                // Insertar ofertas aquí si es necesario
                for (const offer of offersData) {
                    const includedShoes = await Shoe.find({ model: { $in: offer.includedShoes } });
                    const newOffer = new Offer({
                        title: offer.title,
                        details: offer.details,
                        includedShoes: includedShoes.map(shoe => shoe._id)
                    });
                    await newOffer.save();
                }
                console.log('Initial offers  inserted successfully!');
        
       
            }   
    } catch (err) {
        console.error('Failed to insert initial data:', err);
    }
};



const getAllShoes = async () => {
    try {
        const shoes = await Shoe.find();
        return shoes;
    } catch (error) {
        console.error('Error al obtener las zapatillas:', error);
        throw error;
    }
}

const getShoeById = async (shoeId) => {
    try {
        const shoe = await Shoe.findById(shoeId);
        return shoe;
    } catch (error) {
        console.error('Error al obtener el zapato por ID:', error);
        throw error;
    }
}



module.exports = {
    insertInitialData,getAllShoes,getShoeById
}