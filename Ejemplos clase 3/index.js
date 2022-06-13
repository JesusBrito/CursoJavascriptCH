//================FOR================

/*
for(let i = 0; i<10; i++){
    console.log("Este es el mensaje "+ (i+1))
}
*/

/*
let numero = prompt("¿De qué número quiere ver la tabla?")

for(let i = 0; i<10; i++){
    console.log(`${(i+1)}x${numero} = ${numero*(i+1)}`)
}
*/

/*
let numero = prompt("¿De qué número quiere ver la tabla?")

for(let i = 0; i<10; i++){
    if((i+1)===5){
        continue
    }else{
        console.log(`${(i+1)}x${numero} = ${numero*(i+1)}`)
    }
}
*/

/*
let numero = prompt("¿De qué número quiere ver la tabla?")

for(let i = 0; i<10; i++){
    if((i+1)===5){
        break
    }else{
        console.log(`${(i+1)}x${numero} = ${numero*(i+1)}`)
    }
}
*/

/*
//CALCULAR PROMEDIO DADO UN NUMERO DE CALIFICACIONES

let numeroCalificaciones = prompt("¿Cuantas calificaciones son?");
let sumatoria = 0;
let promedio = 0;

for (let i = 0; i < numeroCalificaciones; i++) {
  let calificacion = prompt("Ingrese la calificación " + (i + 1));
  sumatoria = sumatoria + parseFloat(calificacion);
}
promedio = sumatoria / numeroCalificaciones;

alert("La calificación es: "+ promedio);
*/

//================WHILE================

/*
let entrada = prompt("Ingresar un dato (ESC para salir)");

while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    entrada = prompt("Ingresar otro dato");
}
*/

/*
while(false){
    alert("Este mensaje nunca se va a ver")
}
*/

//================ALERTA================
/*
 * NO DES COMENTAR, PUEDE CAUSAR BLOQUEOS EN TU NAVEGADOR LOS BUCLES INFINITOS MUY RARA VEZ
 * SON ÚTILES Y DEBEN EVITARSE
 */

/*
while(true){
    alert("Este es un mensaje infinito")
}
*/

//================ DO WHILE ================

/*
let entrada;
do {
  entrada = prompt("Ingresar un dato (ESC para salir)");
  alert("El usuario ingresó " + entrada);
} while (entrada != "ESC");
*/

/*

let numero = prompt("¿De qué número quiere ver la tabla?")
let i = 0
do{
    console.log(`${(i+1)}x${numero} = ${numero*(i+1)}`)
    i++
}while(i<10)
*/

//================ SWITCH ================
/*
let valor = 1;

switch (valor) {
  case 1:
    console.log("Valor 1");
    break;
  case 2:
    console.log("Valor 2");
    break;
  case 3:
    console.log("Valor 3");
    break;

  default:
    console.log("Valor Default")
    break;
}
*/

/*
let valor = "DOS";

switch (valor) {
  case "UNO":
    console.log("Valor UNO");
    break;
  case "DOS":
    console.log("Valor DOS");
    break;
  case "TRES":
    console.log("Valor TRES");
    break;

  default:
    console.log("Valor Default");
    break;
}
*/

//EJEMPLO ALEXANDER

/*
let seleccionUsuario = parseInt(
  prompt(
    "Que desea comer: \n 1.Una Hamburguesa \n 2.Un Pancho \n 3.Una Milanesa \n 4.Un Choripan"
  )
);
if (seleccionUsuario === 1) {
  alert("Usted selecciono una hamburguesa");
} else if (seleccionUsuario === 2) {
  alert("Usted selecciono un pancho");
} else if (seleccionUsuario === 3) {
  alert("Usted selecciono una milanesa");
} else if (seleccionUsuario === 4) {
  alert("Usted selecciono up Choripan");
}
*/

/*
let seleccionUsuario = parseInt(
  prompt(
    "Que desea comer: \n 1.Una Hamburguesa \n 2.Un Pancho \n 3.Una Milanesa \n 4.Un Choripan"
  )
);

switch (seleccionUsuario) {
  case 1:
    alert("Usted selecciono una hamburguesa");
    break;
  case 2:
    alert("Usted selecciono un pancho");
    break;
  case 3:
    alert("Usted selecciono una milanesa");
    break;
  case 4:
    alert("Usted selecciono up Choripan");
    break;
  default:
    alert("Opción inválida");
    break;
}
*/
/*
//Repetimos hasta que se ingresa "ESC"
let entrada = prompt("Ingresar un nombre (ESC para salir)");
while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN ERES?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}
*/
