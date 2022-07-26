const restar = (a, b) => a - b;
const div = (a, b) => a / b;
const sumar = (a, b) => a + b;
const multi = (a, b) => a * b;

let formulario = document.getElementById("formulario");
let inputNombreProducto = document.getElementById("inputNombreProducto");
let inputCantidad = document.getElementById("inputCantidad");
let inputDireccion = document.getElementById("inputDireccion");

let productos = [];

class Productos {
  constructor(
    nombreProducto,
    cantidad,
    direccion
  ) {
    this.nombreProducto = nombreProducto.toUpperCase();
    this.cantidad = cantidad;
    this.direccion = direccion;
  }
}

formulario.onsubmit = (event) => validarFormulario(event);

function validarFormulario(event) {
  event.preventDefault();
  let nombreProducto = (inputNombreProducto.value);
  let cantidad = parseInt(inputCantidad.value);
  let direccion = (inputDireccion.value);
 
  let producto = new Productos(
    nombreProducto,
    cantidad,
    direccion
  );
  productos.push(producto);

  formulario.reset();

  console.log(productos);
}

const listaProductos = [
  {
    id: 1,
    nombre: "AMD Ryzen 5 5600x",
    img: "img/amd-ryzen-5.png",
    precio: "25000",
    stock: 60,
  },
  {
    id: 2,
    nombre: "Intel i7 9700-k",
    img: "img/i7-9700.jpg",
    precio: "30000",
    stock: 50,
  },
  {
    id: 3,
    nombre: "AMD 6700XT 12GB",
    img: "img/amd-6700xt.jpg",
    precio: "80000",
    stock: 25,
  },
  {
    id: 4,
    nombre: "RTX 3060 12GB",
    img: "img/rtx-3060.webp",
    precio: "100000",
    stock: 30,
  },
  {
    id: 5,
    nombre: "Logitech G-502",
    img: "img/logi-g-502.jpg",
    precio: "7000",
    stock: 15,
  },
  {
    id: 6,
    nombre: "Hyperx alloys FPS",
    img: "img/hyper-fps.jpg",
    precio: "3000",
    stock: 10,
  },
];

const contenedorProductos = document.getElementById("contenedor-productos");

for (const producto of listaProductos) {
  let column = document.createElement("div");
  column.id = `columna-${producto.id}`;
  column.innerHTML = `
<div class="col">
  <div class="card mb-3" style="max-width: 500px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${producto.img}" class="img-fluid rounded-start compo" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$${producto.precio}</p>
          <p class="card-text">stock:${producto.stock}</p>
          <button type="button" class="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  contenedorProductos.append(column);
}
