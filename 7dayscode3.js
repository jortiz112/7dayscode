/*¿Alguna vez has jugado un juego que te dé más de una opción y, dependiendo de lo que elijas, el 
destino del personaje sea completamente diferente?

Hoy vas a desarrollar un ejemplo así con Javascript.

Quiero que trabajes con estructuras de control de flujo. Esta forma complicada de decirlo significa 
que, al igual que en los juegos, la historia que desarrolles debe adaptarse a las respuestas dadas 
por quien está jugando.

Para ello, necesitarás algunas estructuras capaces de alterar el flujo de la aplicación, como for, 
while, if y else. Todas estas pueden cumplir con este objetivo, dada una cierta condición.

El if y el else, que ya te he mostrado en los últimos días, son capaces de crear ramificaciones 
dentro de la aplicación para que se tome una u otra acción, dependiendo de la condición proporcionada.

Los bucles (como for y while) son capaces de transformar una tarea repetitiva en pocas líneas de 
código, sin importar cuántas veces necesites repetir esa tarea.

Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.

Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de 
Back-End, podrá aprender C# o aprender Java.

Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir 
especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar 
en pantalla un mensaje específico para cada elección.

Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, 
la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo 
**ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando 
el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un 
mensaje comentando algo sobre la tecnología ingresada. 

Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender 
y desarrollarse en el área de programación.

Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en 
la lista de aprendizaje. */

let area = parseInt(prompt('¿Quiéres seguir hacia el área de Front-End o seguir hacia el área de Back-End? Responde 1 si es Front-End y 2 si es Back-End.'));
let listaDeAprendizaje = [];

if (area === 1) {
    area = 'Front-End';
    console.log(area);
    let lenguaje = parseInt(prompt('¿Quiéres aprender React o aprender Vue? Responde 3 si es React o 4 si es Vue.'));
    lenguaje = lenguaje == 3 ? console.log('React') : console.log('Vue');
} else if (area === 2) {
    area = 'Back-End';
    console.log(area);
    lenguaje = parseInt(prompt('¿Quiéres aprender C# o apender Java? Responde 5 si es C# o 6 si es Java.'));
    lenguaje = lenguaje == 5 ? console.log('C#') : console.log('Java');
} else {
    alert('No se ingresó ningún valor.');
}

let especializacion = parseInt(prompt(`¿Deséas seguir especializándote en el área ${area} o Fullstack? Responde 1 para ${area} o 2 para Fullstack.`));
if (especializacion === 1) {
    alert(`Entónces deséas seguir especializándote en el área ${area}, excelente!`);
    console.log(`Entónces deséas seguir especializándote en el área ${area}, excelente!`);
} else if (especializacion === 2) {
    alert('Entónces deséas desarrollarte para convertirte en Fullstack, excelente.');
    console.log('Entónces deséas desarrollarte para convertirte en Fullstack, excelente.');
} else {
    alert('No se ingresó ningún valor.');
}   

let tecnologias = prompt('¿En qué tecnologías te gustaría especializarte o conocer?');
if (tecnologias != null) {
    listaDeAprendizaje.push(tecnologias);
    alert(`${tecnologias} es buena elección, continúa aprendiendo.`);
}
while (tecnologias != null) {
    tecnologias = prompt('¿Hay alguna otra tecnología que te gustaría aprender? Ingresa el valor y da click en el botón OK si deseas, caso contrario click en el botón Cancel para terminar.');
    if (tecnologias != null) {        
        listaDeAprendizaje.push(tecnologias);
        alert(`${tecnologias} es buena elección, continúa aprendiendo.`);
    } else {
        tecnologias = null;
    }
}
console.log('Lista de aprendizaje:');
console.log(listaDeAprendizaje);







