// Métodos de Array
// push y pop
let miArray = [1, 2, 3, 4, 5, 6];

miArray.push(7); // Agregar un elemento  al final del array
// console.log(miArray)

let ultimoElemento = miArray.pop(); // Eliminar el ultimo elemento del array
// console.log(ultimoElemento); // Imprimir el valor del ultimo elemento eliminado
// console.log(miArray)

// -----------------------------------------

// Método shift y unshift
let miArray2 = [1, 2, 3]

miArray2.unshift(0);
// console.log(miArray2)
let primerElemento = miArray2.shift();
// console.log(primerElemento);
// console.log(miArray2)

// --------------------------------------------

// Método concat

let miArray3 = [1, 2, 3]
let miArray4 = [4, 5, 6]

let arrayConcatenado = miArray3.concat(miArray4);
// console.log(arrayConcatenado);

arrayConcatenado.push(7);
// console.log(arrayConcatenado)

// -----------------------------------------------
// Método slice
let miArray5 = [1, 2, 3, 4, 5, 6];

let otroArray = miArray5.slice(1, 4)
// console.log(otroArray);

// --------------------------------------------------
// Método forEach
let miArray6 = [1, 2, 3]

miArray6.forEach(function(numero){
    // console.log(numero) //* 2; + 2, etc
})

// ------------------------------------------------------

// Método filter
let miArray7 = [1, 2, 3, 4, 5, 7, 8]

let numerosPares = miArray7.filter((numero) => {
    return numero % 2 === 0;
});
// console.log(numerosPares);

// ------------------------------------------------------------
// Métodos map
let miArray8 = [1, 2, 3]

let duplicados = miArray8.map((numero) => {
    return numero * 4;
    })
// console.log(duplicados);

// -----------------------------------------------------------

// método find
let miArray9 = [5, 12, 13, 15, 3, 6]

let primerMayor = miArray9.find((numero) => {
    return numero > 15;
    });
    
// console.log(primerMayor)

// -----------------------------------------------

// Método every
let miArray10 = [6, 12, 14, 16, 4, 8]

let multiplos = miArray10.every((numero) => {
   return numero % 2 == 0
   })
//    console.log(multiplos) 


// ---------------------------------------------------
let miArray11 = [1, 2, 3, 4, 5];

let sumaTotal = miArray11.reduce(function(acumulador, numero){
    return acumulador + numero;

}, 15)
// console.log("La suma total de los numeros es: " + sumaTotal )

// ------------------------------------------------------
// Método includes
let miArray12 = [1, 2, 3, 4, 5];
let incluye = miArray12.includes(3);
// console.log(incluye)

// ---------------------------------------------------------
let miArray13 = [3, 1, 4, 1, 5, 9, 2]
miArray13.sort();
// console.log(miArray13)