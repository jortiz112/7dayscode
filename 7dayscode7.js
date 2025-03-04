/*Para el ejercicio de hoy: ¿te has detenido a pensar cómo funciona una calculadora?
Te pide que ingreses un número, luego seleccionas un tipo de operación, otro número, y 
ella sola realiza el cálculo para mostrarte el resultado. ¡Increíble, verdad?
En este último desafío, mi propuesta para ti es: crea tu propia calculadora, pero con 
un detalle muy importante: cada operación debe ser una función diferente en tu código.
Primero, la persona debe elegir una opción de operación impresa por el programa en la 
pantalla.
Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el 
resultado de la operación en cuestión.
Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir. 
En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".
Cada operación debe tener una función diferente en tu código, que recibirá los valores 
ingresados como parámetros y devolverá el resultado de la operación.
No olvides usar estructuras de repetición para que la calculadora imprima la elección 
de operación hasta que la persona desee detener el programa.
Recuerda también que, además de if y else, también tenemos switch, que es muy interesante 
de utilizar en casos como este, de múltiples opciones.
*/

let menu = 0;
let valor1 = 0;
let valor2 = 0;
let resultado = 0;
let suma = 0;
let resta = 0;
let multiplicacion = 0;
let division = 0;

function sumaDosNumeros() {
    return suma = valor1 + valor2;
}

function restaDosNumeros() {
    return resta = valor1 - valor2;
}

function multiplicacionDosnumeros() {
    return multiplicacion = valor1 * valor2;
}

function divisionDosNumeros() {
    return division = valor1 / valor2;
}

while (menu <= 4) {
    menu = parseInt(prompt(`¿Escoja un número de las opciones del menú?\n  Menú de la Calculadora:\n  1. Suma\n  2. Resta\n  3. Multiplicación\n  4. División\n  5. Salir`));
    if (menu != 1 && menu != 2 && menu != 3 && menu != 4 && menu != 5) {
        alert('No ha ingresado un valor válido para continuar, favor ingrese el valor correcto.');
        menu = parseInt(prompt(`¿Escoja un número de las opciones del menú?\n  Menú de la Calculadora:\n  1. Suma\n  2. Resta\n  3. Multiplicación\n  4. División\n  5. Salir`));
    }
    if (menu !=5) {
        valor1 = parseInt(prompt('¿Ingrese el primer valor?.')); 
        valor2 = parseInt(prompt('¿Ingrese el segundo valor?.'));
    }
     
    switch (menu) {
        case 1:
            resultado = sumaDosNumeros(valor1, valor2);
            alert(`La suma de ${valor1} + ${valor2} = ${resultado}`);
            break;
        case 2:
            resultado = restaDosNumeros(valor1, valor2);
            alert(`La resta de ${valor1} - ${valor2} = ${resultado}`);
            break;
        case 3:
            resultado = multiplicacionDosnumeros(valor1, valor2);
            alert(`La multiplicación de ${valor1} * ${valor2} = ${resultado}`);
            break;
        case 4:
            resultado = divisionDosNumeros(valor1, valor2);
            alert(`La división de ${valor1} / ${valor2} = ${resultado}`);
            break;
        case 5:
            alert('¡Hasta la próxima!');
            break;
        default:
            alert('No ha ingresado un valor adecuado, favor ingrese el valor nuevamente.');
    }
}

