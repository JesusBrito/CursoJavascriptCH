let botonUno = document.getElementById("btnEventoUno");
let botonDos = document.getElementById("btnEventoDos");

botonUno.addEventListener("click", () => {
  alert("Se oprimió el botón uno");
});

botonDos.onclick = () => {
  alert("Se oprimió el botón dos");
};

function mostrarAlert() {
  alert("Se oprimió el botón tres");
}

let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");
input1.onchange = (event) => {
  console.log(event.target.value);
};
input2.onchange = (event) => {
  console.log(event.target.value);
};

let miFormulario = document.getElementById("formulario");
let inputNombre = document.getElementById("inputNombreProducto");
let inputPrecioCompra = document.getElementById("inputPrecioCompra");
let inputPrecioVenta = document.getElementById("inputPrecioVenta");
let inputCantidad = document.getElementById("inputCantidad");

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault();
  console.log(event.target);

  console.log(inputNombre.value);
  console.log(inputPrecioCompra.value);
  console.log(inputPrecioVenta.value);
  console.log(inputCantidad.value);
}
