let vidaPersonaje = 100;

//================CONDICIONAL SIMPLE================
if (vidaPersonaje == 0) {
  alert("Muere");
}

//================IF ELSE================
if (vidaPersonaje == 0) {
  alert("Muere");
} else {
  alert("Vive");
}

//================CONDICIONALES ANIDADOS================
if (vidaPersonaje == 100) {
  alert("La vida está completa");
} else if (vidaPersonaje == 50) {
  alert("La vida está a la mitad");
} else if (vidaPersonaje < 20) {
  alert("La vida está peligrosamente baja");
} else {
  alert("Murió");
}

//================VARIABLES BOOLEANAS================
let esMayor = 10 > 5;

if (esMayor) {
  alert("Es mayor");
}
//================ESTRICTAMENTE IGUAL================
let valorUno = 1
let valorDos = "1"

if(valorUno == valorDos){
    alert("Son iguales")
}else{
    alert("No son iguales")
}

if(valorUno === valorDos){
    alert("Son iguales")
}else{
    alert("No son iguales")
}

//================OPERADOR AND================
let calificacionUno = prompt("Ingrese la primer calificación");
let calificacionDos = prompt("Ingrese la segunda calificación");

if (calificacionUno >= 6 && calificacionDos >= 6) {
  alert("Aprobado!!!");
} else {
  alert("Reprobado");
}

//================OPERADOR OR================
//Si el estatus es 200 o 201 es una solicitud exitosa

let estatus = prompt("Ingrese el estatus");

if (estatus == 200 || estatus == 201) {
  alert("Solicitud exitosa");
} else {
  alert("Error en la solicitud");
}

//================CONDICIONALES COMPUESTAS AND OR================
//Si el estatus es 200 o 201 y el mensaje no está vacío es una solicitud exitosa

let estatusSolicitud = prompt("Ingrese el estatus")
let mensajeSolicitud = prompt("Ingrese el mensaje")

if( (estatusSolicitud == 200 || estatusSolicitud == 201) &&  mensajeSolicitud != ""){
    alert("Solicitud exitosa")
}else{
    alert("Error en la solicitud")
}

