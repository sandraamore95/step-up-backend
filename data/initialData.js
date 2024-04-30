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
            
        ],
        description:" Las Nike Air Max 90 son un ícono de estilo y comodidad. Con una parte superior de piel sintética y malla transpirable, estas zapatillas ofrecen una excelente durabilidad y ventilación para tu día a día. Su unidad Air Max en el talón proporciona una amortiguación ligera y cómoda, mientras que la suela exterior de goma te brinda tracción en cada paso. Ya sea para ir a la escuela, salir con amigos o hacer ejercicio, las Air Max 90 son una opción versátil para cualquier ocasión."
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
            
        ],
        description:"Ponte un clásico de la terraza con estas zapatillas Gazelle para mujer de adidas Originals. En una combinación de colores blanco y gris putty, estas zapatillas atemporales tienen una parte superior de cuero sintético, encima de una suela acolchada y una suela Gum con agarre. Diseñados para la calle, cuentan con un forro suave y cierre de encaje tonal. Terminado con las 3 Franjas y la marca Gazelle en lámina dorada en las paredes laterales, mientras que el Trébol llega a la lengüeta y el talón."
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
            
        ],
        description:"Las Reebok Club C 85 son un clásico atemporal que nunca pasa de moda. Con una parte superior de cuero suave y una suela de goma resistente, estas zapatillas ofrecen comodidad y estilo en cada paso. El diseño sencillo y elegante las hace perfectas para cualquier ocasión, desde salir a correr hasta disfrutar de un día relajado en la ciudad."
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
            
        ],
        description:"Las zapatillas Puma 180 son una combinación perfecta de estilo y rendimiento. Con una parte superior de malla transpirable y una entresuela de espuma acolchada, estas zapatillas ofrecen comodidad durante todo el día y un ajuste seguro. La suela de goma duradera proporciona tracción en una variedad de superficies, mientras que el diseño elegante y moderno las hace ideales para el uso diario."
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
            
        ],
        description:"Las Nike Air Max 97 combinan estilo y comodidad en un diseño único. Con una parte superior de tela y piel sintética y una unidad Air Max de longitud completa, estas zapatillas ofrecen una amortiguación reactiva y una sensación ligera en cada paso. Su diseño inspirado en los trenes de alta velocidad hace que sean perfectas tanto para correr como para el uso diario."
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
            
        ],
        description:"Las Nike Air Max 95 son un clásico moderno que combina estilo y rendimiento. Con una parte superior de malla transpirable y revestimientos de cuero sintético, estas zapatillas ofrecen una excelente durabilidad y ventilación para tus carreras diarias. La unidad Max Air en el talón y el antepié proporciona una amortiguación receptiva, mientras que la suela de goma con diseño de tracción proporciona tracción en una variedad de superficies."
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
            
        ],
        description:"Las Reebok Classic Leather Hexalite son una versión actualizada de un clásico atemporal. Con una parte superior de cuero suave y perforado y una entresuela Hexalite ligera, estas zapatillas ofrecen comodidad y estilo en cada paso. El diseño elegante y moderno las hace perfectas para cualquier ocasión, desde salir a correr hasta disfrutar de un día relajado en la ciudad."
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
            
        ],
        description:"Las Reebok Preseason 94 Low son unas zapatillas retro que combinan estilo y comodidad. Con una parte superior de cuero suave y una suela de goma duradera, estas zapatillas ofrecen una excelente durabilidad y tracción en una variedad de superficies. El diseño clásico y atemporal las hace perfectas para cualquier ocasión, desde salir a correr hasta disfrutar de un día relajado en la ciudad."
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
            
        ],
        description:"Las Nike Air Max 270 Children ofrecen estilo y comodidad para los más pequeños. Con una parte superior de malla transpirable y una unidad Max Air en el talón, estas zapatillas ofrecen una amortiguación ligera y una sensación de suavidad en cada paso. El diseño moderno y llamativo las hace perfectas para correr, jugar o simplemente relajarse."
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
            
        ],
        description:"Las Nike Dunk Remastered son una versión actualizada de un clásico del baloncesto. Con una parte superior de cuero suave y una entresuela acolchada, estas zapatillas ofrecen comodidad y estilo en cada paso. El diseño retro y elegante las hace perfectas para cualquier ocasión, desde salir a correr hasta disfrutar de un día relajado en la ciudad."
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
            
        ],
        description:" Las Rebook Flexagon júnior son unas zapatillas versátiles que ofrecen comodidad y rendimiento para los más pequeños. Con una parte superior de malla transpirable y una entresuela acolchada, estas zapatillas ofrecen una amortiguación ligera y una sensación de suavidad en cada paso. El diseño moderno y llamativo las hace perfectas para correr, entrenar o jugar."
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
            
        ],
        description:"Las Nike Air Force 1 Low son un clásico atemporal que combina estilo y comodidad. Con una parte superior de cuero suave y una suela de goma duradera, estas zapatillas ofrecen una excelente durabilidad y tracción en una variedad de superficies. El diseño elegante y minimalista las hace perfectas para cualquier ocasión, desde salir a correr hasta disfrutar de un día relajado en la ciudad."
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
            
        ],
        description:"Las Nike Air Force 1 Shadow Mujer son una versión moderna de un clásico atemporal. Con una parte superior de cuero suave y una suela de goma duradera, estas zapatillas ofrecen comodidad y estilo en cada paso. El diseño elegante y femenino las hace perfectas para cualquier ocasión, desde salir a correr hasta disfrutar de un día relajado en la ciudad."
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
            
        ],
        description:"Las zapatillas Puma Suede XL son un clásico de estilo urbano que nunca pasa de moda. Con una parte superior de ante suave y una suela de goma duradera, estas zapatillas ofrecen comodidad y estilo en cada paso. El diseño retro y llamativo las hace perfectas para cualquier ocasión, desde salir a correr hasta disfrutar de un día relajado en la ciudad."
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
            
        ],
        description:"Las Reebok Classic Leather Perfect Split Children son unas zapatillas versátiles que ofrecen comodidad y estilo para los más pequeños. Con una parte superior de cuero suave y una suela de goma duradera, estas zapatillas ofrecen una excelente durabilidad y tracción en una variedad de superficies. El diseño clásico y atemporal las hace perfectas para cualquier ocasión, desde salir a correr hasta disfrutar de un día relajado en la ciudad."
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
