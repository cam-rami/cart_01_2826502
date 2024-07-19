const Carrito = [
        {
            nombre : "Lenovo ",
            descripcion : "Lactop para oficina",
            tipoProducto : "Computador portadil",
            modelo :"VG6",
            precio :{
                minimoVenta : 300000,
                compra : 1000000
            },
            caracteristicas :{
                dimensiones:{
                    alto: 400,
                    ancho: 100,
                    largo: 300

                },
                fabricacion :{
                    pais : "Taiwan",
                    fecha : new Date('2017-05-02')
                }
            },
            obtenerPrecioCopra : function(){
                return this.precio.compra
            }
        },
        {
            nombre : "HP ",
            descripcion : "COMPUTADOR DE MESA",
            tipoProducto : "COMPUTADOR",
            modelo :"EFT56",
            precio :{
                minimoVenta : 500000,
                compra : 12000000
            },
            caracteristicas :{
                dimensiones:{
                    alto: "5cm",
                    ancho: "55cm",
                    largo: "35cm"

                },
                fabricacion :{
                    pais : "EUD",
                    fecha : new Date('2025-05-02')
                }
            },
            obtenerPrecioCopra : function(){
                return this.precio.compra
            }
        },
        {
            nombre : "Samsung",
            descripcion : "telefono azul",
            tipoProducto : "telefono",
            modelo :"A80",
            precio :{
                minimoVenta : 300000,
                compra : 1000000
            },
            caracteristicas :{
                dimensiones:{
                    alto: "2cm",
                    ancho: "30cm",
                    largo: "26cm"

                },
                fabricacion :{
                    pais : "china",
                    fecha : new Date('2017-05-02')
                }
            },
            obtenerPrecioCopra : function(){
                return this.precio.compra
            }
        },
        {
            nombre : "samsung ",
            descripcion : "televisor",
            tipoProducto : "televisor sala",
            modelo :"VG676769DD",
            precio :{
                minimoVenta : 3000000,
                compra : 1000
            },
            caracteristicas :{
                dimensiones:{
                    alto: "178cm",
                    ancho: "67cm",
                    largo: "245cm"

                },
                fabricacion :{
                    pais : "Taiwan",
                    fecha : new Date('2017-05-02')
                }
            },
            obtenerPrecioCopra : function(){
                return this.precio.compra
            }
        },
        {
            nombre : "Iphon ",
            descripcion : "telefono ",
            tipoProducto : "telefono",
            modelo :"15 max",
            precio :{
                minimoVenta : 360000,
                compra : 18700000
            },
            caracteristicas :{
                dimensiones:{
                    alto: "13cm",
                    ancho: "8cm",
                    largo: "3cm"

                },
                fabricacion :{
                    pais : "china",
                    fecha : new Date('2017-05-02')
                }
            },
            obtenerPrecioCopra : function(){
                return this.precio.compra
            }
        },
        
]

//imprimir el nombre
console.log(Carrito[0].obtenerPrecioCopra)
//recorer el carrito de compras 
//metodo forEach
//no retorna u nuevo arreglo
    Carrito.forEach((producto) => {
        if(producto.caracteristicas.fabricacion.pais === "Taiwan")
        console.log(producto.nombre)
    }
    
 )
 // metodo de transformacion map
 let preciosCopra = Carrito.map((producto)=>{
    return producto.precio.compra
 })
 // filter: recorrre el areglo busca el elemento 
 //         que cncuerda con la condiional
 //         etable en el filtro
 //         creando un nuevo arreglo 
 //         con los objetos que cumplen dichos criterios
 let productosTaiwan = Carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais ==="Taiwan"
 })
 //calculo del total del producto inventario
 let total = 0
 Carrito.forEach(producto => {
    //acumular el valor de compra 
    //de cada producto recorrido
    //en la variable total
    total += producto.precio.compra
 })
 console.log (`el valor total inventario es: ${total}`)
 //utilizando el method reduce. reduce a un solo valor 
 //el arreglo , co base en una exprecion
 let inventario = Carrito.reduce((total, producto)=>{
    return total + producto.precio.compra
 }, 
    0)

 console.log(`el valor inventario 2 es : ${inventario}`)
 ////////////////////////////////////////////////////////////////////////
 
 
 for (let producto of Carrito) {
    console.log(`nombre: ${producto.nombre}`);
    console.log(`Tipo de producto: ${producto.tipoProducto}`);
    console.log(`modelo: ${producto.modelo}`);
    console.log(`dimension largo: ${producto.caracteristicas.dimensiones.largo}`);
    console.log(`pais de fabricacion: ${producto.caracteristicas.fabricacion.pais}`);
  }

  //6.1
   
 let inventario2 = Carrito.reduce((total, producto)=>{
    return total + producto.precio.compra
 }, 
    0)

  //7.1
  Carrito.forEach((producto) => {
    if(producto.caracteristicas.fabricacion.pais === "china")
    console.log(producto)
})

//7.2
Carrito.forEach((producto) => {
    if(producto.caracteristicas.dimensiones.alto >= 200)
    console.log(producto)
})
//7.3
Carrito.forEach((producto) => {
    if(producto.precio.compra <=10000)
    console.log(producto)
})


