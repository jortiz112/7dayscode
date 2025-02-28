const nombre = prompt('¿Cuál es tu nombre?');
const edad = prompt('¿Cuántos años tienes?');
const lenguaje = prompt('¿Cuál lenguaje de programación estás estudiando');
const msj = `Hola ${nombre}, tu tienes ${edad} años y estas aprendiendo ${lenguaje}!`;
alert(msj);
const favorito = prompt(`Te gusta estudiar ${lenguaje}? Responde con el número 1 - Sí o con el número 2 - No`);
if (favorito == 1) {
    alert('¡Muy bien! sigue estudiando y tendrás mucho éxito.');
} else if (favorito == 2) {
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}