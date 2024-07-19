//alert("Hola 2826502")
let nombre = prompt("por favor ingrese nombre ")
document.querySelector("div").innerText = nombre

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