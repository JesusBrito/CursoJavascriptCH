//================EJEMPLOS CLASE 4================

//================FUNCIONES================

/*
function saludar() {
    let nombre = prompt("¿Cual es tu nombre?")
    alert("¡Hola! "+ nombre)
}

saludar()
*/

/*
function sumarDosNumeros(numeroUno, numeroDos) {
    let suma = numeroUno + numeroDos
    alert("La suma es: "+ suma)
}

sumarDosNumeros(5, 10)
*/

/*
function sumarCalificaciones(calificacionUno, calificacionDos, calificacionTres) {
    let sumatoria = calificacionUno + calificacionDos + calificacionTres
    return sumatoria
}

function mostrarPromedio() {
    let resultadoSumatoria = sumarCalificaciones(10, 8, 9)
    let promedio = resultadoSumatoria/3
    alert("El promedio es: "+ promedio)
}

mostrarPromedio()
*/

/*
function suma(numeroUno, numeroDos) {
  let resultado = numeroUno + numeroDos;
  return resultado;
}

function resta(numeroUno, numeroDos) {
  let resultado = numeroUno - numeroDos;
  return resultado;
}

function multiplicacion(numeroUno, numeroDos) {
  let resultado = numeroUno * numeroDos;
  return resultado;
}

function division(numeroUno, numeroDos) {
  let resultado = numeroUno / numeroDos;
  return resultado;
}

function mostrarResultado(resultado) {
  alert("El resultado es: " + resultado);
}

function calculadora() {
  let opcion = parseInt(
    prompt(
      "Bienvenido, seleccione la opción \n 1.-Suma\n 2.- Resta\n 3.-Multiplicación\n 4.- División "
    )
  );
  let numeroUno = parseFloat(prompt("Ingrese el primer número"));
  let numeroDos = parseFloat(prompt("Ingrese el segundo número"));

  switch (opcion) {
    case 1:
      let resultadoSuma = suma(numeroUno, numeroDos);
      mostrarResultado(resultadoSuma);
      break;
    case 2:
      let resultadoResta = resta(numeroUno, numeroDos);
      mostrarResultado(resultadresultadoRestaoSuma);
      break;
    case 3:
      let resultadoMultiplicacion = multiplicacion(numeroUno, numeroDos);
      mostrarResultado(resultadoMultiplicacion);
      break;

    case 4:
      let resultadoDivision = division(numeroUno, numeroDos);
      mostrarResultado(resultadoDivision);
      break;

    default:
        alert("Opción incorrecta")
      break;
  }
}

calculadora();
*/
//================SCOPE================

/*

let resultado = 0
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(5,6);

//Se puede acceder a la variable resultado porque es global
alert(resultado);

*/
/*
function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
}
//No se puede acceder a la variable resultado fuera del bloque
alert(resultado);
*/

/*
let nombre = "John Doe" // variable global

function saludar() {
    let nombre = "Juan" // variable local
    alert(nombre)
}
//Accede a nombre global
alert(nombre)   // → “John Doe”

//Accede a nombre local
saludar() // → “Juan”
*/

//================FUNCIONES ANONIMAS================

/*
const suma = function (valorUno, valorDos) {
  let resultado = valorUno + valorDos;
  return resultado;
};

alert("El resultado es: "+ suma(15, 20))
*/

/*
const suma = (valorUno, valorDos) => {
    let resultado = valorUno + valorDos;
    return resultado;
}
alert("El resultado es: "+ suma(15, 20))
*/

/*
const suma = (valorUno, valorDos) => valorUno + valorDos;

alert("El resultado es: " + suma(15, 20));

const mostrarValor = valor => {
  alert(valor);
};
*/

const suma = (valorUno, valorDos) => valorUno + valorDos;
const resta = (valorUno, valorDos) => valorUno - valorDos;
const iva   = subtotal => subtotal * 0.21

let precioProducto  = 500
let descuento = 50 

//Calculo el precioProducto + IVA - descuento
let sumatoria = suma(precioProducto, iva(precioProducto))
let nuevoPrecio = resta(sumatoria, descuento) 
//let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
alert(nuevoPrecio)
