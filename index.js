const Pizzas = [
    {
        id: 1,
        nombre: 'Muzzarella',
        precio: 1200,
        ingredientes: [
            'Muzzarella'
        ]
    },
    {
        id: 2,
        nombre: 'Jamon y huevo',
        precio: 1400,
        ingredientes: [
            'Muzzarella',
            'Jamon',
            'Huevo'
        ]
    },
    {
        id: 3,
        nombre: 'Mediterranea',
        precio: 1650,
        ingredientes: [
            'Aceitunas verdes',
            'Aceitunas negras',
            'Anchoas',
            'Muzzarela',
            'Tomate'
        ]
    },
    {
        id: 4,
        nombre: 'Fugazzeta',
        precio: 1700,
        ingredientes: [
            'Muzzarella',
            'Cebolla'
        ]
    },
    {
        id: 5,
        nombre: 'Jamon y morron',
        precio: 1400,
        ingredientes: [
            'Muzzarella',
            'Jamon',
            'Morron'
        ]
    },
    {
        id: 6,
        nombre: 'Casera',
        precio: 550,
        ingredientes: [
            'Harina',
            'Queso',
            'Salsa de tomate'
        ]
    },
]

// PIZZAS IMPARES

const pizzaImpar = Pizzas.filter( Pizzas => Pizzas.id % 2 == 1)
pizzaImpar.forEach((pizza) => console.log(`El id de la pizza ${pizza.nombre} es impar`));


console.log('--------------------------------------------------');
// PIZZAS CON PRECIO MENOR A $600

const precioMenor600 = Pizzas.filter( Pizzas => Pizzas.precio < 600)
precioMenor600.forEach((pizza) => console.log(`La pizza ${pizza.nombre} vale menos de $600`));


console.log('--------------------------------------------------');
// NOMBRE DE CADA PIZZA Y SUS PRECIOS

Pizzas.forEach ((pizza) => console.log(`La pizza ${pizza.nombre} vale ${pizza.precio}`));


console.log('--------------------------------------------------');
//TODOS LOS INGREDIENTES DE CADA PIZZA

Pizzas.forEach ((pizza) => {
    console.log(`La pizza ${pizza.nombre} viene con:`)
    pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente))
    console.log('--------------------------------------------------');
;})