//================VARIABLES================
/*
let palabraUno //Declarar variable
palabraUno = "Hola" //Asignar un valor a una variable, inicializar la variable
let palabraDos = "mundo" //Declarar variable y asignarle un valor
let palabraTres = palabraUno+palabraDos //Concatenar dos palabras
let palabraCuatro = `${palabraUno}${palabraDos}` //Concatenar dos palabras ES6
console.log(palabraTres)
console.log(palabraCuatro)
*/

/*
const NUMERO_UNO = 2  //Declarar constante y asignarle un valor
let numeroDos = 5 //Declarar variable y asignarle un valor

let suma = NUMERO_UNO + numeroDos
let resta = NUMERO_UNO - numeroDos
let multi = NUMERO_UNO * numeroDos
let division = NUMERO_UNO/numeroDos

console.log(suma)
console.log(resta)
console.log(multi)
console.log(division)
*/

/*
const NUMERO_TRES = 2  //Declarar constante y asignarle un valor
let numeroCuatro = 5 //Declarar variable y asignarle un valor

NUMERO_TRES = 7 //ERROR -> No se puede actualizar el valor de una constante
console.log(NUMERO_TRES)
console.log(numeroCuatro)
*/

//================PROMPT, LOG Y ALERT================
let numeroUno = prompt("¿Cual es el primer número?")
let numeroDos = prompt("¿Cual es el segundo número?")

let suma = parseFloat(numeroUno)+parseFloat(numeroDos)
let multi = parseFloat(numeroUno)*parseFloat(numeroDos)

alert(`La suma es: ${suma} y la multiplicación es: ${multi}`)