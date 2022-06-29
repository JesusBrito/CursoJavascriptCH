//================ EJEMPLO COMPLETO  ================
class Producto {
  constructor(nombre, precioCompra, precioVenta, cantidad) {
    this.nombre = nombre.toUpperCase();
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.cantidad = cantidad;
  }
}

let productos = [];
let tabla;

function registrarProductos() {
  let numeroProductos = parseInt(prompt("Cuantos productos va a registrar?"));
  for (let index = 0; index < numeroProductos; index++) {
    let nombre = prompt("Ingrese el nombre");
    let precioCompra = prompt("Ingrese el precio de compra");
    let precioVenta = prompt("Ingrese el precio de venta");
    let cantidad = prompt("Ingrese la cantidad");
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
  let filaTabla = document.createElement("tr");
  contenedor.innerHTML = `<td></td>
    <td></td>
    <td></td>
    <td></td>`;
  tabla.append(filaTabla);
}

function inicializarElementos() {
  tabla = document.getElementById("tabla-productos");
}

function main() {
  inicializarElementos();
  registrarProductos();
  agregarProductosTabla();
}

main();


<table id="tabla-productos">
          <th>
            <tr>
              <td>Nombre</td>
              <td>Precio compra</td>
              <td>Precio venta</td>
            </tr>
          </th>
          <tbody>
            
          </tbody>
        </table>