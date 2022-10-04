class Pizza {
    constructor(id, nombre, ingredientes, precio){
        this.id = id,
        this.nombre = nombre,
        this.ingredientes = ingredientes,
        this.precio = precio
    }
}

const muzzarella = new Pizza (1, 'muzzarella', ['muzzarella','salsa'], 1500)
const napolitana = new Pizza (2, 'napolitana', ['muzzarella', 'salsa', 'tomate'], 1600)
const calabresa = new Pizza (3, 'calabresa', ['muzzarella', 'salsa', 'longaniza'], 1800)
const fugazzetta = new Pizza (4, 'fugazzetta', ['muzzarella','salsa', 'cebolla'], 1800)
const jamonYqueso = new Pizza (5, 'jamon y queso', ['muzzarella','salsa', 'jamon'], 1800)
const anana = new Pizza (6, 'anana', ['muzzarella','salsa', 'anana'], 1700)

let ArrayDeObjetos = [muzzarella, napolitana, calabresa, fugazzetta, jamonYqueso, anana]

console.log(ArrayDeObjetos);

for (let index = 0; index.nombre = 'muzzarella'; index++) {
    console.log('soy muzzarella');
    
}

