// sintaxis  funcion arrow
//reglas
//  1. si el bloque de codigo 
//      de la funcio flecha solo tiene 
//      una linea no hace flata poner corchetes 
//  2.si la funcion flecha tiene un solo parametro
//      se puede omitir el parentesis de los parametros 
//  3.si el bloque de cogigo 
//      de la funcion flecha tiene 
//      una linea y esta linea debe retornar
//      un valor es posible omitoir el return para que solo asi se aplique la regla 2
const saludo = nombre =>
    `hola ${nombre} desde una funcion flecha`;

    

//invocar la funcion flecha 
console.log(saludo("Camila"));
