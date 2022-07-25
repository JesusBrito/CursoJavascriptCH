async function obtenerInformacion() {
  fetch("https://6244e0467701ec8f724a5a7f.mockapi.io/api/productos")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

async function obtenerUnProducto(id) {
  fetch(`https://6244e0467701ec8f724a5a7f.mockapi.io/api/productos/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

async function registrarProducto(producto) {
  fetch("https://6244e0467701ec8f724a5a7f.mockapi.io/api/productos", {
    method: "POST",
    body: JSON.stringify(producto),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

async function editarProducto(producto, idProducto) {
  fetch(`https://6244e0467701ec8f724a5a7f.mockapi.io/api/productos/${idProducto}`, {
    method: "PUT",
    body: JSON.stringify(producto),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

obtenerInformacion();
const idProducto = 7;
obtenerUnProducto(idProducto);

let productoARegistrar = {
  nombre: "Producto prueba",
  cantidad: 10,
  precioVenta: "700.00",
  precioCompra: "600.00",
  fecha: "2022-04-04T06:08:01.498Z",
};

let productoActualizado = {
  nombre: "Producto prueba  modificado",
  cantidad: 10,
  precioVenta: "700.00",
  precioCompra: "600.00",
  fecha: "2022-04-04T06:08:01.498Z",
};

let idProductoActualizar = 10

//registrarProducto(productoARegistrar)
editarProducto(productoActualizado, idProductoActualizar);

async function test() {
  const res = await fetch("/jsonTest.json");
  const data = await res.json();
  console.log(data);
}

//test();
