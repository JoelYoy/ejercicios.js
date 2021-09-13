/* 2.- Crear un programa que solicite 2 números por prompt. Mandar 
esos dos valores a una función por parámetros para realizar las
operaciones aritméticas básicas (suma, resta, multiplicación y división),
y mostrar el resultado.
NOTA: El resultado puede ser mostrado por consola o por html. */

var num1 =  parseInt(prompt("Escribe un número"));
var num2 =  parseInt(prompt("Esscribe otro número"));
function suma(num1, num2){
    var resultado1 = num1 + num2;
    console.log(resultado1);
}

function resta(num1, num2){
    var resultado2 = num1 - num2;
    console.log(resultado2);
}

function multiplicacion(num1, num2){
    var resultado3 = num1 * num2;
    console.log(resultado3);
}

function division(num1, num2){
    var resultado4 = num1 / num2;
    console.log(resultado4);
}

suma(num1 ,num2);
resta(num1,num2);
multiplicacion(num1,num2);
division(num1,num2);
