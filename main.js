// Comentario de 1 linea

/* Comentario multilinea
Mi primer hola mundo
alert("Hola mundo")
alert("holaaa"); */

// Variables
// El valor puede cambiar
var nombre = "joel";
var apellido = "Ibarra Barrientos";
var edad = 28;

edad = 50;

let telefono;
let colorFavorito = "azul";
let comidaFavorita = "enchiladas";
telefono = 123456;

// Constantes
// El valor no puede variar 
const gravead = 9.8;
gravedad = "no hay gravedad";
const estudiantes = 20;

// Let y var diferencias
var numero = 40;

if (true) {
    var numero = 50;
    console.log(numero); // 50
}

console.log(numero); // 40 ? 50

var numero2 = 100;
numero2 = 1000;
console.log(numero2); // 100
let otronumero = 100

if (true) {
    var numero2 = 5;
    console.log(numero2); // 5
    let  numero3 = 27;
    console.log(numero3);
}

console.log(numero2); // 100
//console.log(numero3);

console.log(otronumero);

// Tipos de datos
console.log(typeof(nombre));
console.log(typeof(edad));