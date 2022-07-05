// let botonUno = document.getElementById("btnEventoUno")
// let botonDos = document.getElementById("btnEventoDos")

// botonUno.addEventListener("click", () => {
//   alert("Se oprimió el boton uno")
// })

// botonDos.onclick = () => {
//   alert("Se oprimió el botón dos")
// }

// function mostrarAlert(){
//   alert("Se oprimió el botón tres")
// }

// let boton = document.getElementById("boton")

// boton.onmousedown = () => {
//   console.log("Evento mouse down")
// }

// boton.onmouseup = () => {
//   console.log("Evento mouse up")
// }

// boton.onmouseover = () => {
//   console.log("Evento mouse over")
// }

// boton.onmouseout = () => {
//   console.log("Evento mouse out")
// }

// boton.onmousemove = () => {
//   console.log("Evento mouse move")
// }

/*
let inputNombre = document.getElementById("nombre");
let inputEdad = document.getElementById("edad");
*/
/*
inputNombre.onkeydown = () => {
  alert("Se oprimió un boton, evento down")
}
*/

/*
inputNombre.onkeyup = () => {
  alert("Se oprimió un boton, evento up")
}*/

/*
inputNombre.onchange = () => {
  console.log("se ejecuta evento onchange, input nombre");
};

inputEdad.onchange = () => {
  console.log("se ejecuta evento onchange, input edad");
};
*/

/*
inputNombre.oninput = () => {
  console.log("se ejecuta evento oninput, input nombre");
};

inputEdad.oninput = () => {
  console.log("se ejecuta evento oninput, input edad");
};
*/

let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("inputNombreProducto");
let inputPrecioCompra = document.getElementById("inputPrecioCompra");
let inputPrecioVenta = document.getElementById("inputPrecioVenta");
let inputCantidad = document.getElementById("inputCantidad");

let productos = [];

class Productos {
  constructor(
    nombre,
    precioCompra,
    precioVenta,
    cantidad,
    precioCompraTotal,
    precioVentaTotal
  ) {
    this.nombre = nombre.toUpperCase();
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.cantidad = cantidad;
    this.precioCompraTotal = precioCompraTotal;
    this.precioVentaTotal = precioVentaTotal;
  }
}

formulario.onsubmit = (event) => validarFormulario(event);

function validarFormulario(event) {
  event.preventDefault();
  let nombre = inputNombre.value;
  let precioCompra = parseFloat(inputPrecioCompra.value);
  let precioVenta = parseFloat(inputPrecioVenta.value);
  let cantidad = parseInt(inputCantidad.value);

  let totalPrecioCompra = cantidad * precioCompra;
  let totalPrecioVenta = cantidad * precioVenta;

  let producto = new Productos(
    nombre,
    precioCompra,
    precioVenta,
    cantidad,
    totalPrecioCompra,
    totalPrecioVenta
  );
  productos.push(producto);

  if(nombre.toLowerCase() === "laptop"){
    alert("es una laptop")
  }

  /*
    inputNombre.value = "";
    inputPrecioCompra.value = "";
    inputPrecioVenta.value = "";
    inputCantidad.value = "";
  */

  formulario.reset();

  console.log(productos);
}
