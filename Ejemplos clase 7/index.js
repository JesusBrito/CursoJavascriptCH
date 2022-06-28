/*
//================ FUNCIONES DE ORDEN SUPERIOR ================

const numeros= [1, 2, 3, 4]

function porCadaUno(arreglo, funcionAEjecutar){
    for (const elemento of arreglo) {
        funcionAEjecutar(elemento)
    }
}

porCadaUno(numeros, console.log)


let total = 0

function acumular(num) {
    total += num
}

porCadaUno(numeros, acumular)
alert("El total es:"+ total)

*/

/*
//================ FUNCIONES DE ORDEN SUPERIOR ================

const numeros = [1, 2, 3, 4, 10, 15, 30];

function sumaPorCondicion(arreglo, test) {
  let total = 0;
  for (const elemento of arreglo) {
    if (test(elemento)) {
      total += elemento;
    }
  }

  return total;
}

function condicionParaSuma(numero) {
  if (numero > 10) {
    return true;
  } else {
    return false;
  }

  //return numero > 10
}

//let total = sumaPorCondicion(numeros, condicionParaSuma);
let total = sumaPorCondicion(numeros, (numero) => numero >= 10);

alert("El total es: " + total);
*/

//================ FUNCIONES DE ORDEN SUPERIOR NATIVAS  ================

//================ forEach  ================

/*
const numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach( (numero)=> {
    alert(numero)
} )
*/

//================ find  ================

/*
const productos = [
    {nombre: 'Cuaderno', precio: 15},
    {nombre: 'Libro', precio: 50},
]

const resultado = productos.find((producto) => producto.nombre === "Cuaderno")
const resultado2 = productos.find((producto) => producto.nombre === "Pluma")

console.log(resultado)
console.log(resultado2)
*/

//================ filter  ================

/*
const productos = [
    {nombre: 'Cuaderno', precio: 15},
    {nombre: 'Libro de js', precio: 50},
    {nombre: 'Pluma', precio: 7},
    {nombre: 'Borrador', precio: 5},
    {nombre: 'Diccionario', precio: 100},
]

const resultado = productos.filter((producto) => producto.nombre.includes('js'))
const resultado2 = productos.filter((producto) => producto.precio < 50)

console.log(resultado)
console.log(resultado2)
*/

//================ filter  ================

/*
const productos = [
    {nombre: 'Cuaderno', precio: 15},
    {nombre: 'Libro de js', precio: 50},
    {nombre: 'Pluma', precio: 7},
    {nombre: 'Borrador', precio: 5},
    {nombre: 'Diccionario', precio: 100},
]

console.log( productos.some((producto) => producto.nombre == "Cuaderno")) 
console.log( productos.some((producto) => producto.nombre == "Sacapuntas")) 
*/

//================ map  ================

/*
const productos = [
    {nombre: 'Cuaderno', precio: 15},
    {nombre: 'Libro de js', precio: 50},
    {nombre: 'Pluma', precio: 7},
    {nombre: 'Borrador', precio: 5},
    {nombre: 'Diccionario', precio: 100},
]

const nombres = productos.map((producto) => producto.nombre)
console.log("Nombre de los productos: " + nombres)

const productosConPrecioActualizado = productos.map((producto) => producto.precio*1.10)

console.log(productosConPrecioActualizado)
*/

//================ reduce  ================

/*
const productos = [
    {nombre: 'Cuaderno', precio: 15},
    {nombre: 'Libro de js', precio: 50},
    {nombre: 'Pluma', precio: 7},
    {nombre: 'Borrador', precio: 5},
    {nombre: 'Diccionario', precio: 100},
]

const total = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)

alert("El valor total de los productos es: "+ total)

*/

//================ sort  ================

/*
const productos = [
  { nombre: "Cuaderno", precio: 15 },
  { nombre: "Libro de js", precio: 50 },
  { nombre: "Pluma", precio: 7 },
  { nombre: "Borrador", precio: 5 },
  { nombre: "Diccionario", precio: 100 },
];

productos.sort((elementoUno, elementoDos) => {
  if (elementoUno.precio > elementoDos.precio) {
    return 1;
  } else if (elementoUno.precio < elementoDos.precio) {
    return -1;
  } else {
    // elementoUno es igual a elementoDos
    return 0;
  }
});

console.log(productos)
*/

//================ EJEMPLO COMPLETO DE e-COMMERCE  ================

/*
const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const buscado = productos.find((producto) => producto.id === 3);
console.log(buscado);

const existe = productos.some((producto) => producto.nombre === "Harina");
console.log(existe);

const baratos = productos.filter((producto) => producto.precio < 100);
console.log(baratos);

const listaNombres = productos.map((producto) => producto.nombre);
console.log(listaNombres);
*/

const fechaActual = new Date()
const milisegundosPorDia = 86400000

let dia = parseInt(prompt("Ingresa tu día de nacimiento"))
let mes = parseInt(prompt("Ingresa tu mes de nacimiento"))
let anio = parseInt(prompt("Ingresa tu año de nacimiento"))

const cumpleanios = new Date(anio, mes-1, dia)
const diferenciaDias = ( fechaActual - cumpleanios ) / milisegundosPorDia
const diferenciaAnios = diferenciaDias / 365

alert(`Naciste hace ${diferenciaAnios} años` )
alert(`Naciste hace ${Math.floor(diferenciaAnios)} años` )
alert(`Naciste hace ${Math.ceil(diferenciaAnios)} años` )
