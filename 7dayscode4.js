/*¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando? Hoy 
volverás a tu infancia y harás exactamente eso. ¡Pero ahora, el juego será contra la propia computadora!

Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 
para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, 
te felicitará. Si te equivocas, te dará 2 intentos más.

Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno 
predefinido. */


//Variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1; //Número aleatorio, para que sea fijo se quita esta asignación y se quema el número
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;  //Número máximo 3 intentos

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Ingresa un número entre el 1 al ${numeroMaximoPosible} por favor:`));
    /* En este código se realiza la comparacion con valor y tipo*/
    if (numeroUsuario === numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Felicidades acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        //Un poco de ayuda extra para que el usuario pueda adivinar el número secreto
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos++; //Se incrementa el número de intentos
        //Cuando se supera el número máximo de intentos, se le imprime el numero secreto que se deseaba adivinar
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos y el número secreto que deseabas adivinar es: ${numeroSecreto}`);
            break;
        }

    }
}   