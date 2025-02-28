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







