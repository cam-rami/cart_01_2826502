const nombres = ["Lapiz HB", 
    "Resaltador",
    "Borrador de nata"];

//agregar elemntos al arreglo:
nombres[3] = "Micropunta"
console.table(nombres);
console.log(nombres[1])

//agregar un elemento al final:
nombres.push("corrector");

//agregar un elemento al principio
nombres.unshift("Borrador miga de pan")

//eliminar elementos de un arreglo
delete nombres[3]

//eliminado elemento del final 
nombres.pop();


//elimir elementos del principio
nombres.shift();
console.log(nombres)

for( let i=0 ; i<nombres.length; i+=1 ){
console.log(nombres[i])
}

//operador spread con arreglos:
const nombres2 =[
"Transportador",
"Regla 30cm"
]
let productos = [...nombres, ...nombres2]
const elemento = "compas"
productos1 = [...productos, elemento]
const Transportador = "transportador"
productos1 = [...productos1 , Transportador]

console.table(productos1);
