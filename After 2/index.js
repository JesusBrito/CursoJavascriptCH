//================ EJEMPLO COMPLETO  ================
const productos = [];
let tabla;
let textoTotalCompra;
let textoTotalVenta;
let textoTotalGanancia;

class Producto {
  constructor(nombre, precioCompra, precioVenta, cantidad) {
    this.nombre = nombre.toUpperCase();
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.cantidad = cantidad;
  }
  calcularPrecioCompra = () => this.precioCompra * this.cantidad;
  calcularPrecioVenta = () => this.precioVenta * this.cantidad;
}


function inicializarElementos() {
  tabla = document.getElementById("tabla-productos");
  textoTotalCompra = document.querySelector("#totalCompra span");
  textoTotalVenta = document.querySelector("#totalVenta span");
  textoTotalGanancia = document.querySelector("#totalGanancia span");
}

function registrarProductos() {
  let numeroProductos = parseInt(prompt("Cuantos productos va a registrar?"));
  for (let index = 0; index < numeroProductos; index++) {
    let nombre = prompt("Ingrese el nombre");
    let precioCompra = parseFloat(prompt("Ingrese el precio de compra"));
    let precioVenta = parseFloat(prompt("Ingrese el precio de venta"));
    let cantidad = parseInt(prompt("Ingrese lancantidad"));
    let productoARegistrar = new Producto(
      nombre,
      precioCompra,
      precioVenta,
      cantidad
    );
    productos.push(productoARegistrar);
  }
}

function agregarProductosTabla() {
  productos.forEach((producto) => {
    let filaTabla = document.createElement("tr");
    filaTabla.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.precioCompra}</td>
      <td>${producto.precioVenta}</td>
      <td>${producto.cantidad}</td>`;
    tabla.tBodies[0].append(filaTabla);
  });
}

function calcularTotales() {
  let totalCompra = 0;
  let totalVenta = 0;

  totalCompra = productos.reduce(
    (acumulador, item) => acumulador + item.calcularPrecioCompra(),
    0
  );

  totalVenta = productos.reduce(
    (acumulador, item) => acumulador + item.calcularPrecioVenta(),
    0
  );

  textoTotalCompra.innerText = totalCompra;
  textoTotalVenta.innerText = totalVenta;
  textoTotalGanancia.innerText = totalVenta - totalCompra;

}

function main() {
  inicializarElementos();
  registrarProductos();
  agregarProductosTabla();
  calcularTotales();
}

main();
