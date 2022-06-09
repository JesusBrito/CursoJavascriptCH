/*
//================CONDICIONAL SIMPLE================
let vidaPersonaje = 101;

if(vidaPersonaje == 0){
    alert("Muerto")
}

//================IF ELSE================

if(vidaPersonaje == 0){
    alert("Muerto")
} else{
    alert("Vivo")
}

*/

/*
//================CONDICIONALES ANIDADOS================

if (vidaPersonaje == 100) {
  alert("La vida está completa");
} else if (vidaPersonaje == 50) {
  alert("La vida está a la mitad");
} else if (vidaPersonaje == 0) {
  alert("Muerto");
} else if (vidaPersonaje < 20) {
  alert("La vida esta peligrosamente baja");
}
*/

/*
//================VARIABLES BOOLEANAS================

let esMayor = 10 > 5;

if (esMayor) {
  alert("Es mayor");
}

*/
/*
let edad = prompt("Ingresa tu edad");

if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("No eres mayor de edad");
}
*/

/*
//================OPERADOR AND================

let calificacionUno = prompt("Ingrese la primer calificacion");
let calificacionDos = prompt("Ingrese la segunda calificacion");

if (calificacionUno >= 5 && calificacionDos >= 5) {
  alert("Aprobado");
} else {
  alert("Reprobado");
}
*/

/*
//================OPERADOR OR================
//Si un estatus es igual a 200 o 201 es una solicitud exitosa

let estatus = prompt("Ingrese el estatus")

if(estatus == 200 || estatus == 201){
    alert("Solicitud exitosa")
}else{
    alert("Error en la solicitud")
}
*/

/*
//================ESTRICTAMENTE IGUAL================

let numeroUno = 1
let numeroDos = "1"

if(numeroUno === numeroDos){
    alert("Son iguales")
}else {
    alert("no son iguales")
}
*/

/*
let numeroUno = 1
let numeroDos = 2

if(numeroUno != numeroDos){
    alert("no son iguales")
}else {
    alert("Son iguales")
}

*/
/*
let numeroUno = 1
let numeroDos = "1"

if(numeroUno !== numeroDos){
    alert("no son iguales")
}else {
    alert("Son iguales")
}
*/

/*
let condicional = false
console.log(!condicional)

if(!condicional){
    alert("Falso")
}else{
    alert("verdadero")
}

*/

/*
//================CONDICIONALES COMPUESTAS AND OR================

let valorUno = true
let valorDos = true
let valorTres = true

if(valorUno == true && (valorDos == false || valorTres == false)){

    alert("verdadero")
}else{
    alert("falso")
}
*/

let nombre = prompt("Ingrese nombre");
let apellido = prompt("Ingrese apellido");

if (nombre !== "" && apellido !== "") {
  alert(`Tu nombre completo es: ${nombre} ${apellido}`);
  //alert("Tu nombre completo es: " + nombre + " " + apellido);
} else {
  alert("Ingrese los valores");
}
