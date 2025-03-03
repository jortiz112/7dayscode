/*¿Recuerdas el pequeño programa que creaste ayer para hacer tu propia lista de compras? ¡Hoy tu 
desafío es hacerlo aún más interesante!
Ya viste cómo trabajar con arrays de forma sencilla, añadiendo elementos a tu lista de compras.
Otra operación muy común es la eliminación de elementos de la lista, y por eso es muy importante 
que sepas cómo hacerlo.
Pensándolo bien, existen muchas maneras de eliminar un elemento de una lista. Puedes eliminar 
el primer elemento, el último, o cualquier otro del medio de la lista. Cada una de estas operaciones 
tiene su propio método en la documentación de arrays de Javascript. Vamos a hablar más sobre estos 
métodos en la sección de "Consejos".
Deberás crear la opción de eliminar algún elemento de la lista, que se mostrará junto con la pregunta: 
“¿deseas añadir un alimento a la lista de compras?”.
A partir de ahí, si la persona elige esa opción, el programa imprimirá los elementos presentes en la 
lista actual, y la persona deberá escribir cuál de ellos desea eliminar.
Después de eso, el programa eliminará el elemento de la lista e imprimirá la confirmación de que el 
elemento realmente ya no está allí.
Finalmente, el programa volverá al ciclo inicial de preguntas.
Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje 
advirtiendo de ello.
Por ejemplo: “¡No fue posible encontrar el elemento en la lista!”.
Recuerda que la opción de eliminar un elemento solo deberá estar disponible a partir del momento en que 
exista al menos un elemento en la lista de compras.
Puedes buscar el elemento que la persona desea eliminar de la forma que prefieras, utilizando métodos de 
Javascript para ello.
Existe el método .includes(elemento), que devuelve true o false si el array en cuestión contiene dicho 
elemento o no.
Existe también el método .indexOf(elemento), que devuelve la posición de ese elemento dentro del array, 
o `-1` si no lo encuentra.
Para la eliminación en sí, existen diferentes métodos. El método shift, por ejemplo, elimina siempre el 
primer elemento de la lista; el método pop elimina el último; mientras que el método splice elimina un 
cierto número de elementos a partir de una determinada posición. Elige el que consideres que tiene más 
sentido para tu pequeño programa. */

let lista = 0;
let alimento = '';
let categoria = '';
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let hortalizas = [];
let eliminarAlimento = '';
let posicion = 0;

function agregarAlimento() {
    alimento = prompt('¿Qué alimento deseas agregar?');
    categoria = prompt('¿En qué categoría se encaja ese alimento: frutas, lacteos, congelados, hortalizas, dulces? Copia el nombre exactamente como se muestra.');
    if (categoria === "frutas") {
        frutas.push(alimento);
    } else if (categoria === "lacteos") {
        lacteos.push(alimento);
    } else if (categoria === "congelados") {
        congelados.push(alimento);
    } else if (categoria === "hortalizas") {
        hortalizas.push(alimento);
    } else if (categoria === "dulces") {
        dulces.push(alimento);
    } else {
        alert('No ha ingresado una categoría válida');
    }
}

function imprimirLista() {
    alert(`Lista de compras:\n  Frutas: ${frutas.join(', ')}\n  Lácteos: ${lacteos.join(', ')}\n  Congelados: ${congelados.join(', ')}\n  Hortalizas: ${hortalizas.join(', ')}\n  Dulces: ${dulces.join(', ')}`);
}

function eliminarAlimentoDeLista(lista) {
    posicion = lista.indexOf(eliminarAlimento); //Obtengo la posición del alimento a eliminar.
    lista.splice(posicion, 1);  //Elimino el alimento de la lista de frutas.
    imprimirLista();  //imprime la lista para confirmar que ya se eliminó el alimento.
}

while (lista <= 2) {
    //Permite ingresar el primer elemento si la lista esta vacía
    if (frutas.length === 0 && lacteos.length === 0 && congelados.length === 0 && hortalizas.length === 0 && dulces.length === 0) {
        lista = parseInt(prompt('¿Deseas agregar un alimento a tu lista de compras? Responde 1 si es Sí, o 3 si es No.'));
        if (lista === 3) { // condición para ya no ingresar más alimentos y salir.
            break;
        }
        if (lista != 1 && lista != 3) {
            alert('No ha ingresado un valor válido para continuar, favor ingrese el valor correcto.');
            // volverá al ciclo inicial de las preguntas
            lista = parseInt(prompt('¿Deseas agregar un alimento a tu lista de compras? Responde 1 si es Sí, o 3 si es No.'));
            agregarAlimento();
        } else {
            agregarAlimento();  // Para agregar el primer alimento.
        }
    } else {  //Si ya existe al menos un alimento en la lista entrará aquí hasta escoger ya no ingresar mas alimentos
        lista = parseInt(prompt('¿Deseas agregar un alimento a tu lista de compras? Responde 1 si es Sí, o 3 si es No, o 2 si deseas Eliminar algún Alimento de la Lista.'));
        if (lista != 1 && lista != 2 && lista != 3) {
            alert('No ha ingresado un valor válido para continuar, favor ingrese el valor correcto.');
            // volverá al ciclo inicial de las preguntas
            lista = parseInt(prompt('¿Deseas agregar un alimento a tu lista de compras? Responde 1 si es Sí, o 3 si es No, o 2 si deseas Eliminar algún Alimento de la Lista.'));
            agregarAlimento();
        }
        if (lista === 3) {  // condición para ya no ingresar más alimentos y salir.
            break;
        } else if (lista === 2) { // codición para eliminar un alimento de la lista
            while (lista === 2) {
                imprimirLista(); //Imprime la lista actual para escoger el alimento que se va a eliminar
                eliminarAlimento = prompt('¿Qué alimento escogiste para eliminar?');
                // Para confirmar que existe el alimento en la lista antes de eliminarlo
                if (frutas.includes(eliminarAlimento) === true || lacteos.includes(eliminarAlimento) === true || congelados.includes(eliminarAlimento) === true || hortalizas.includes(eliminarAlimento) === true || dulces.includes(eliminarAlimento) === true) {
                    if (frutas.includes(eliminarAlimento) === true) {
                        eliminarAlimentoDeLista(frutas);                    
                    } else if (lacteos.includes(eliminarAlimento) === true) {
                        eliminarAlimentoDeLista(lacteos);
                    } else if (congelados.includes(eliminarAlimento) === true) {
                        eliminarAlimentoDeLista(congelados);
                    } else if (hortalizas.includes(eliminarAlimento) === true) {
                        eliminarAlimentoDeLista(hortalizas);
                    } else if (dulces.includes(eliminarAlimento) === true) {
                        eliminarAlimentoDeLista(dulces);
                    }
                    // volverá al ciclo inicial de las preguntas
                    lista = parseInt(prompt('¿Deseas agregar un alimento a tu lista de compras? Responde 1 si es Sí, o 3 si es No, o 2 si deseas Eliminar algún Alimento de la Lista.'));
                } else { //Si el usuario ingreso mal el nombre del alimento que desea eliminar y no se lo encontró
                    alert('¡No fue posible encontrar el alimento en la lista, debes escoger un alimento que exista en la lista actual.!');
                    // volverá al ciclo inicial de las preguntas
                    lista = parseInt(prompt('¿Deseas agregar un alimento a tu lista de compras? Responde 1 si es Sí, o 3 si es No, o 2 si deseas Eliminar algún Alimento de la Lista.'));
                }                
            }            
        }  
        agregarAlimento();               
    }    
}
imprimirLista();
console.log(`Lista de compras:\n  Frutas: ${frutas.join(', ')}\n  Lácteos: ${lacteos.join(', ')}\n  Congelados: ${congelados.join(', ')}\n  Hortalizas: ${hortalizas.join(', ')}\n  Dulces: ${dulces.join(', ')}`);