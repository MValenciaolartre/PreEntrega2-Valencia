// PRECIO TOTAL DE TODO LO COMMPRADO
let totalDeProductos = 0;

// array productos disponibles 
let productos = [
    { id:1, nombre: 'Teclado', precio: 6000, cantidad: 10 },
    { id:2, nombre: 'Celular', precio: 500000,cantidad: 9 },
    { id:3, nombre: 'Auricular', precio:15000,cantidad:7},
    { id:4, nombre: 'Computador', precio:700000,cantidad:10},
    { id:5, nombre: 'Parlante', precio:20000,cantidad:5},
    { id:6, nombre: 'Monitor', precio:55000,cantidad:7},
    { id:7, nombre: 'Televisor', precio:120000,cantidad:3},

];

// funcion que arma la lista 
function armarListaDeProductos () {
    
    let contenidos = "Lista de Productos:\n\n";
    for (let index = 0; index < productos.length; index++) {
     contenidos += "cod " + productos[index].id + "-" + productos[index].nombre + " " + productos[index].precio + "\n" 
   }
    return contenidos;
}
 // clase para los productos
class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
}

// funcion que muestra todos los productos
   function mostrarProductos () {
    let titulo = "Lista de Productos:\n\n";
    let codigo = prompt(armarListaDeProductos ())
    let cantidad = prompt("Cantidad de Articulos")
    calcularPrecio (codigo, cantidad)
    let seguirComprando = "si"
    
}
// funcion que calcula el precio y busca en el array
function calcularPrecio(codigo, cantidad) {
    let productoEncontrado;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == codigo) {
            productoEncontrado = productos[i];
        }
    }

    if (productoEncontrado) {
        alert(`Precio: ${productoEncontrado.precio * cantidad}`);
        totalDeProductos = totalDeProductos + productoEncontrado.precio * cantidad;
  }
}
// bucle que pregunta comprar productos 
   let entrada = prompt("Desea comprar algún producto");

  while (entrada.toUpperCase() !== "NO") {
      switch (entrada.toUpperCase()) {
          case "NO":
              alert("Total a pagar: " + totalDeProductos);
              break;
          default:
              mostrarProductos();
              break;
      }
  
      entrada = prompt("Desea comprar algún producto");
  }
  
  alert("Gracias por su compra. Total a pagar: " + totalDeProductos)