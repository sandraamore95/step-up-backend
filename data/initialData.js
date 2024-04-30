// initialData .js  -> shoes, collection , offers
const shoesData = [
    {
        brand: 'Nike',
        model: 'Air Max 90',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 150,
        color: 'White',
        popularity:13,
        images: [
            'https://i8.amplience.net/i/jpl/jd_689848_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689848_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689848_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689848_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Adidas',
        model: 'Originals Gazelle para Mujer',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 100,
        color: 'Black',
        popularity:10,
        images: [
            'https://i8.amplience.net/i/jpl/jd_702859_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_702859_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_702859_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_702859_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },{
        brand: 'Reebok',
        model: 'club c 85',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 90,
        color: 'White',
        popularity:0,
        images: [
            'https://i8.amplience.net/i/jpl/jd_619896_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_619896_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_619896_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_619896_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Puma',
        model: '180',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 80,
        color: 'Blue',
        popularity:2,
        images: [
            'https://i8.amplience.net/i/jpl/jd_690796_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690796_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690796_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690796_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Nike',
        model: 'Air Max 97',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 120,
        color: 'White',
        popularity:8,
        images: [
            'https://i8.amplience.net/i/jpl/jd_647114_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_647114_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_647114_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_647114_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Nike',
        model: 'Air Max 95',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 150,
        color: 'Black',
        popularity:17,
        images: [
            'https://i8.amplience.net/i/jpl/jd_680546_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_680546_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_680546_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_680546_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Reebok',
        model: 'Classic Leather Hexalite',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 90,
        color: 'White',
        popularity:24,
        images: [
            'https://i8.amplience.net/i/jpl/jd_690901_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690901_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690901_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690901_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Reebok',
        model: 'Preseason 94 Low',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 100,
        color: 'White',
        popularity:28,
        images: [
            'https://i8.amplience.net/i/jpl/jd_687044_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_687044_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_687044_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_687044_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },


    {
        brand: 'Nike',
        model: 'Air Max 270 Children',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 100,
        color: 'White',
        popularity:50,
        images: [
            'https://i8.amplience.net/i/jpl/jd_689363_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689363_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689363_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689363_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Nike',
        model: 'Nike Dunk Remastered',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 100,
        color: 'White',
        popularity:50,
        images: [
            'https://i8.amplience.net/i/jpl/jd_668425_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_668425_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_668425_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_668425_f?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },

    {
        brand: 'Rebook',
        model: 'Reebok Flexagon júnior',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 100,
        color: 'White',
        popularity:80,
        images: [
            'https://i8.amplience.net/i/jpl/jd_692723_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_692723_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_692723_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_692723_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },




    {
        brand: 'Nike',
        model: 'Nike Air Force 1 Low',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 100,
        color: 'White',
        popularity:50,
        images: [
            'https://i8.amplience.net/i/jpl/jd_668138_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_668138_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_668138_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_668138_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },



    {
        brand: 'Nike',
        model: 'Nike Air Force 1 Shadow Mujer',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 100,
        color: 'White',
        popularity:23,
        images: [
            'https://i8.amplience.net/i/jpl/jd_689855_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689855_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689855_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689855_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },

    {
        brand: 'Puma',
        model: 'Suede XL',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 100,
        color: 'White',
        popularity:2,
        images: [
            'https://i8.amplience.net/i/jpl/jd_690794_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690794_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690794_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690794_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    }
    , {
        brand: 'Reebok',
        model: 'Classic Leather Perfect Split Children',
        sizes: [36, 37, 38, 39, 40, 41, 42], 
        price: 100,
        color: 'White',
        popularity:24,
        images: [
            'https://i8.amplience.net/i/jpl/jd_686946_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_686946_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_686946_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_686946_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    }
];

const collectionsData = [
    {
        name: 'Colección de Verano',
        description: 'Descubre nuestra colección de verano con zapatillas frescas y coloridas.',
        includedShoes: ['Air Max 90', 'Preseason 94 Low'] // Nombres de las zapatillas que pertenecen a esta colección
    },
    {
        name: 'Colección de Invierno',
        description: 'Explora nuestra colección de invierno con zapatillas cálidas y resistentes.',
        includedShoes: ['Classic Leather Hexalite', 'club c 85','Reebok Flexagon júnior','Classic Leather Perfect Split Children'] // Nombres de las zapatillas que pertenecen a esta colección
    }
];

const offersData = [
    {
        title: 'Oferta de Verano',
        details: '¡Descuento especial en zapatillas para el verano!',
        includedShoes: ['180','Preseason 94 Low','Air Max 95'] // Nombres de las zapatillas incluidas
    },
    {
        title: 'Oferta de Invierno',
        details: '¡Gran venta de invierno en zapatillas!',
        includedShoes: ['Classic Leather Hexalite'] // Nombres de las zapatillas incluidas
    }
];

module.exports = {
    shoesData,
    collectionsData,
    offersData
};
