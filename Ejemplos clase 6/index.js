//================ LLENAR ARREGLO DE NOMBRES ================

/*
const listaNombres = [];
let cantidad = 5;

for (let index = 0; index < cantidad; index++) {
  let entrada = prompt("Ingresar nombre");
  listaNombres.push(entrada.toUpperCase());
  console.log("Tamaño arreglo " + listaNombres.length);
}

const nuevaLista = listaNombres.concat(["ANA", "EMA"]);
nuevaLista.unshift("JESUS");
nuevaLista.shift();
nuevaLista.pop();
nuevaLista.splice(0, 3);
console.log("Nueva lista:");
console.log(nuevaLista);

console.log("Nueva lista invertida:");
console.log(nuevaLista.reverse());

console.log("ANA está en la posición: " + nuevaLista.indexOf("ANA"));
console.log("El arreglo incluye ANA : " + nuevaLista.includes("ANA"));
console.log("El arreglo incluye SOFIA : " + nuevaLista.includes("SOFIA"));

const listaUnida = nuevaLista.join(", ");
console.log("Lista unida: " + listaUnida);

const listaReducida = nuevaLista.slice(0, 2);
console.log("Lista reducida:");
console.log(listaReducida);

*/
//================ ELIMINAR UN ELEMENTO DE UN ARREGLO ================

/*
const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
const eliminar = (nombre) => {
  let index = nombres.indexOf(nombre);
  if (index != -1) {
    nombres.splice(index, 1);
  }
};

eliminar("Pedro");
*/

class Producto {
  constructor(nombre, precioCompra, precioVenta, cantidad) {
    this.nombre = nombre.toUpperCase();
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.cantidad = cantidad;
  }
  calcularCosto = () => this.cantidad * this.precioCompra;
}

function agregarProductos() {
  let numeroProductos = parseInt(
    prompt("Cuantos productos necesita registrar")
  );
  let productos = [];
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
  return productos;
}

function mostrarProductos(productos) {
  for (const producto of productos) {
    console.log(producto);
    console.log(producto.nombre);
  }
}

function calcularCosto(productos) {
  let sumatoriaCosto = 0;
  for (const producto of productos) {
    sumatoriaCosto += producto.calcularCosto();
  }
  return sumatoriaCosto
}

function main() {
  let productos = agregarProductos();
  mostrarProductos(productos);

  alert("El costo total de los productos es: " + calcularCosto(productos))
}

main();
