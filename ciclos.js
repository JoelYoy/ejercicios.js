// Sirve para ejecutar n cantidades de veces un código

/* console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola");
console.log("hola"); */

for(var contador = 0; contador < 10; contador++){  // variable i
    console.log("Hola desde el ciclo for. Vuelta " + contador);
}

const frutas = ["Manzana", "Mango", "Pera", "Piña", "Sandía", "Melón"];

/* console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]); */

for(var i= 0; i < frutas.length; i++){
    console.log(frutas[i]);   
}