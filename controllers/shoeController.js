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



const getAllShoes = async (req, res) => {
    try {
        const shoes = await Shoe.find();
        res.json(shoes);
    } catch (error) {
        console.error('Error al obtener las zapatillas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const getShoeById = async (req, res) => {
    const shoeId = req.params.id; 
    try {
        const shoe = await Shoe.findById(shoeId);
        if (!shoe) {
            return res.status(404).json({ message: 'Zapato no encontrado' });
        }
        // incrementa la popularidad
        incrementPopularity(shoeId).catch(error => {
            console.error('Error al incrementar la popularidad:', error);
        });
        res.json(shoe);
    } catch (error) {
        console.error('Error al obtener el zapato por ID:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}



const getShoeByModel = async (req, res) => {
    const model = req.params.model; 
    try {
        const shoe = await Shoe.findOne({ model });
        if (!shoe) {
            return res.status(404).json({ message: 'Zapatilla no encontrada' });
        }
        res.json(shoe);
    } catch (error) {
        console.error('Error al obtener la Zapatilla por nombre:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


// Función para incrementar la popularidad de una zapatilla por su ID
async function incrementPopularity(shoeId) {
    try {
        const shoe = await Shoe.findById(shoeId);
        if (!shoe) {
            throw new Error('Zapatilla no encontrada');
        }
        shoe.popularity += 1;
        await shoe.save();
    } catch (error) {
        throw new Error('Error al incrementar la popularidad de la zapatilla');
    }
}


//funcion para probar las rutas protegidas
const pruebaPermission = (req, res) => {
    const userData = req.user; 
    const response = {
        message: "Has accedido exitosamente a un recurso protegido.",
        userData: userData
    };
    res.json(response);
};

module.exports = {
    insertInitialData,getAllShoes,getShoeById,getShoeByModel,incrementPopularity,pruebaPermission
}