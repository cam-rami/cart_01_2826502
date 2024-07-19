console.log("carrito de compras..")
//Template String: 
//una alternativa a la concatenacion 
//permite incrustar un valor dentro de un string
const nombreProducto = new String("Lenovo v4");
console.log(`EL producto es: ${nombreProducto}`);

const precioProducto = 23;
const precioProductoStr = "23";
console.log(precioProducto)
console.log(precioProductoStr)
console.log(precioProducto === precioProductoStr)

//Objeto producto:
//Objeto literal:
const producto1 = {
    nombre :"Lenovo thinkpad",
    color:"red",
    modelo:"YTY566",
    descripcion:"laptop para trabjo liviano",
    precio: 2300000.98,
    getModelo: function(){
        console.log(this.modelo);
    }
}
producto1.imagen = "imagen1.jpg"
console.log(producto1)
//invocar metodo getModelo
producto1.getModelo();

// sin desestructuracion
nombresito = producto1.nombre;
console.log(nombresito)

//con desestructuracion
const { descripcion , precio} = producto1;
console.log(descripcion, precio)

//objeto constructor:
const producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instanciias de producto
const p1 = new  producto("Lapiz HB berol",
                            "azul",
                            5000
);
console.log(p1)

//operador spread
const medidas = {
    "peso": "50k",
    "altura": "1m",
    "largo": "50cm"

}

const nuevoProducto = { ...producto1, ...medidas  }
console.log(nuevoProducto)



//acceder a los productos del objeto 
//console.log(producto1["modelo"])