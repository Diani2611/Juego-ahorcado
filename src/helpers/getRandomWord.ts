let words: string[] = [
    'COMPUTADORA',
    'CARRO',
    'LEOPARDO',
    'GIMNASIO',
    'PANTERA',
    'SANDIA',
    'CASA',
    'AVION',
    'COLLAR',
    'MESA',
    'MUÑECA',
    'CAMION',
    'UNIVERSO',
    'BUFANDA',
    'LIBRO',
    'CAFE',
    'GENTE',
    'GATO',
    'BICHOS',
    'PANDA',
    'PAYASOS',
    'ENSALADA',
    'UNICORNIOS',
    'POLLO',
];


export function getRandomWord  ()  {

    const randomIndex = Math.floor(Math.random() * words.length);

    

    return words [randomIndex];
}