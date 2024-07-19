//Ejemplo
//sintaxis: Declaracion de funcion 

function saludo(nombre){
    console.log(`Hola ${nombre} como estas`)
}
//invocar , llamar , ejecutar saludo 
saludo("critian") //argumento:cristian

//sintaxis : exprecion de funciones 
//se asigna a una constante 
const saludo2 = function(nombre = "cristian2"){//-> parametro por defecto
    console.log(`hola ${nombre} `)
}

saludo2();