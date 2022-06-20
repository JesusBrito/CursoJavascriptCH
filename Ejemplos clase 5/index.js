/*
//================ OBJETOS ================

const personaje = {
    nombre: "spiderman",
    vida: 400,
    poder: 600
}

console.log(personaje)

console.log("Nombre personaje "+ personaje.nombre)
console.log("Vida personaje "+ personaje["vida"])

personaje.vida = 80
personaje["vida"] = 120

console.log("Nueva vida personaje "+ personaje.vida)
*/

//================ FUNCIÓN CONSTRUCTORA ================
/*
function Personaje(nombre, vida, poder) {
    this.nombre = nombre;
    this.vida = vida;
    this.poder = poder;
}

const arquero = new Personaje("Hawkeye", 100, 150)
const velocista = new Personaje("Flash", 250, 200)

console.log(arquero)
console.log(velocista)

console.log("Nombre personaje "+ arquero.nombre)
console.log("Nombre personaje "+ velocista["nombre"])

arquero.vida = 80
velocista["vida"] = 120

console.log("Nueva vida personaje"+ arquero.vida)
console.log("Nueva vida personaje"+ velocista["vida"])
*/

//================ MÉTODOS PERSONALIZADOS ================

/*
function Personaje(nombre, vida, poder) {
    this.nombre = nombre;
    this.vida = vida;
    this.poder = poder;
    this.aumentarVida = (vida) => this.vida += vida
    this.disminuirVida = (vida) => this.vida -= vida
}

const ironman = new Personaje("Ironman", 450, 600)

ironman.aumentarVida(200)

console.log("Nueva vida personaje: "+ ironman.vida)
*/

//================ OPERADOR IN ================
/*
console.log( "nombre" in ironman);
console.log( "origen" in ironman);
*/

//================ OPERADOR FOR IN ================
/*
for (const propiedad in ironman) {
    console.log(`${propiedad}: ${ironman[propiedad]}`);
}
*/

//================ CLASES ================

class Personaje {
    constructor(nombre, vida, poder){
        this.nombre = nombre.toUpperCase();
        this.vida = vida;
        this.poder = poder;
        this.vivo = true
    }
    hablar(){
        alert(`Hola mi nombre es: ${this.nombre} tengo ${this.vida} puntos de vida y ${this.poder} puntos de poder`)
    }
    aumentarVida = (vida) => this.vida += vida
    disminuirVida = (vida) => {
        let nuevaVida = this.vida -= vida
        if(nuevaVida <= 0){
            this.vivo = false
            this.vida = 0
        }else{
            this.vida = nuevaVida
        }
    }
    matar = () => {
        this.vivo = false
        if(this.vida>0){
            this.vida = 0
        }
    }
}


const wolverine = new Personaje("Wolverine", 500, 350)
const deadpool = new Personaje("Deadpool", 800, 250)

//wolverine.aumentarVida(400)
wolverine.hablar()

deadpool.disminuirVida(wolverine.poder)
deadpool.hablar()