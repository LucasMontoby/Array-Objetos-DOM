let persona = {
    nombre: "Lucas",
    apellido: "Garate",
    edad: 25,
    ciudad: "Madrid"
}


// console.log(persona.nombre)
// console.log(persona["edad"])

persona.trabajo =  "Desarrollador Frontend"; //Agrego
// console.log(persona);

delete persona.ciudad; //Elimino
// console.log(persona);

for (let propiedades in persona){
    // console.log(propiedades  + ": "+ persona[propiedades]);
}

let persona2 = {
    nombre: "Juan",
    apellido: "Garat",
    edad: 30,
    ciudad: "Barcelona"
}

console.log(persona === persona2)
