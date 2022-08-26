const products = [
    
    {
        id:1,
        titulo: "ISO HD BPI 4.9 LBS",
        price: 340000,
        image: 'isohdbpi.webp',
        stock: 10,
        descripcion:"ISO HD ™ es combustible puro, limpio y para la construcción y definicion de músculos. Cada cucharada proporciona 25 g de proteína de suero 100% aislada con solo 4 g de carbohidratos y 1 g de azúcar. Los aislados se filtran para eliminar la mayor parte de la lactosa, la grasa y los carbohidratos, lo que da como resultado un producto final con más proteínas, más magro y de digestión más rápida que la proteína de suero estándar. Pero damos un paso más para asegurarnos de que solo reciba la proteína de la más alta calidad. Cada una de nuestras botellas de proteínas es inspeccionada por un laboratorio externo para garantizar que lo que está en la etiqueta sea realmente lo que está en la botella. Utilice esta fórmula con confianza para apoyar los programas de desarrollo muscular y / o pérdida de peso." 
    },
    {
        id:2,
        titulo: "WHEY PROTEIN PURE SERIES 2 LBS",
        price: 170000,
        image: 'wheypure.webp',
        stock: 15,
        descripcion: "Muscletech es lider en el mercado mundial en nutrición deportiva. Teniendo en mente que debemos elegir cuidadosamente los alimentos que ponemos en nuestro cuerpo Muscletech nos trae esta proteina de suero de leche totalmente natural, endulzada con Stevia y Maltodextrina, micronizada para una disolución instantánea al mezclarla con agua o leche sin colorantes, saborizantes artificiales ni preservantes agregados. Ideal para aquellas personas que desean enriquecer su dieta con proteína y para el individuo activo para tomar después del ejercicio."
    },
    {
        id:3,
        titulo: "BI-PRO RIPPED",
        price: 175000,
        image: 'biproripped.webp',
        stock: 20,
        descripcion: "Bi Pro Ripped es una fórmula nutricional elaborada a base de proteína de suero y caseína, proteínas lácteas con excelentes perfiles nutricionales y diferentes velocidades de absorción, contiene en su fórmula 1.000 mg L-Carnitina y 400 mcg Picolinato de cromo, en las proporciones adecuadas, aporta 30 gramos de proteína por servicio. Bi-Pro Ripped contiene avena como fuente de carbohidratos, ideal para personas que buscan alimentos con fibra y bajo índice glucémico. Además posee el más delicioso y cremoso sabor para disfrutar al máximo."
    },
    {
        id:4,
        titulo: "BI-PRO CLASSIC 3 LBS",
        price: 240000,
        image: 'biproclassic.webp',
        stock: 8,
        descripcion: "Bi pro classic es la proteína de suero de leche más pura del mercado, libre de carbohidratos, grasas y de ingredientes no deseados. Bi pro classic contiene el perfil más alto de aminoácidos esenciales y ramificados necesarios para la construcción de tejidos corporales en especial la masa muscular. Bi pro classic es una proteína de rápida absorción y alto valor biológico. Use bi pro classic para cualquier objetivo: Aumento de masa muscular, pérdida de grasa, definición muscular o nutrición general. Bi pro classic es un alimento a base de suero de leche, un ingrediente natural y con un alto valor nutricional para el organismo."
    },
    {
        id:5,
        titulo: "ISO CLEAN",
        price: 185000,
        image: 'isoclean.webp',
        stock: 14,
        descripcion: "Iso Clean es la última tecnología en proteínas aisladas de suero adicionada con hidroxibetametilbutirato 500 mg (caHMB) y ácido linoleico conjugado 2.000 mg (CLA) ideal para personas y atletas con altos requerimientos de proteínas y aminoácidos de la más alta calidad. Proteina de suero de leche sabor a vainilla, contiene 40g de proteína en 1 scoop, 180 calorias, 36 servicios por envase, contiene 1000mg de CLA (quemador de grasa) y 1000mg de HMB (estimulante anabólico). Especial para procesos de definición y mantenimiento muscular."
    },
    {
        id:6,
        titulo: "SIMPLY ISOLATE",
        price: 325000,
        image: 'isolatesimply.webp',
        stock: 11,
        descripcion: "Es un aislado de proteína de suero de alto rendimiento enriquecido con BCAA y un perfil de aminoácidos rico en valor biológico. Hecho para atletas ávidos y recién llegados de proteínas por igual, Simply Protein contiene 25 g de proteína pura y bioactiva en cada cucharada. Simply Protein es la forma saludable de aumentar las proteínas en su dieta."
    },
    {
        id:7,
        titulo: "SASCHA ISOLATE",
        price: 249000,
        image: 'isolatesascha.webp',
        stock: 21,
        descripcion: "Hay dos tipos de whey protein, concentrada y aislada, la diferencia entre ambas es el nivel de pureza. La proteína concentrada es 80% proteína y contiene más grasa y lactosa, azúcar. La proteína aislada (Isolate) contiene más proteína, es mucho más pura y de mejor calidad, no contiene ni grasa ni lactosa lo que te ayudará a bajar peso. Con esta 100% Whey Protein Isolate quisimos ir aún más allá y ofrecerte un producto excepcional, por eso la hidrolizamos. La proteína hidrolizada es la misma proteína que fue predigerida, esto ayuda a que tus músculos la absorban aún más rápido, es mucho más pura y libre de potenciales alérgenos. Para mejorar aún más la calidad de nuestro producto añadimos enzimas digestivas. La adición de estas enzimas mejoran significativamente la digestión y ayudan a aliviar trastornos digestivos, estreñimiento, gases e hinchazón. Son de vital importancia para el cuerpo ya que permiten una mejor asimilación y absorción de nutrientes o suplementos y ayudan a convertir los alimentos en energía."
    },
    {
        id:8,
        titulo: "ISOPURE ZERO CARB",
        price: 310000,
        image: 'isopure.webp',
        stock: 23,
        descripcion: "La fórmula de Isopure está enriquecida con L-glutamina, el aminoácido que se encuentra en mayor parte dentro del tejido muscular, disminuye el catabolismo muscular y favorece el correcto funcionamiento del sistema inmune, por lo que es fundamental para optimizar los procesos de recuperación muscular después del entrenamiento y mantener un rendimiento muscular óptimo. Isopure Zero Carb, además contiene vitamina B6, la vitamina más importante en la actuación del metabolismo de las proteínas, por lo que mejora la asimilación, aumenta la absorción y disminuye el desgaste y la fatiga muscular."
    },
    {
        id:9,
        titulo: "ISO 100",
        price: 205000,
        image: 'iso100.webp',
        stock: 9,
        descripcion: "Debe su nombre a su fuente de proteínas, 100% aislado de proteína de suero, haciendo de la iso 100 una proteína limpia. Su combinación de proteína hydrolizada y proteína isolatada. Muchas compañías afirman que usan aislado de proteína de suero, pero después de tomar puedes ver al instante y saborear e incluso sentir la diferencia. Los beneficios de la iso 100, se deben a que es procesada a la perfección, 100% hidrolizado y pasada hasta por 5 controles de calidad."
    },
    {
        id:10,
        titulo: "SYNTHA 6.5 LBS",
        price: 320000,
        image: 'syntha.webp',
        stock: 19,
        descripcion: "Cada porción de SYNTHA-6 proporciona una matriz de proteína de 22 gramos que consta de: concentrado de proteína de suero, aislado de proteína de suero, caseinato de calcio, caseína micelar, aislado de proteína de leche y albúmina de huevo. SYNTHA-6 se mezcla como un delicioso batido y está diseñado para cualquier persona que desee complementar su ingesta diaria de proteínas. No importa el objetivo, SYNTHA-6 ofrece una experiencia inigualable similar a un batido."
    },
]

export default products