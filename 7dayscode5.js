let lista = 0;
let alimento = '';
let categoria = '';
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let hortalizas = [];

while (lista <= 1) {
    lista = parseInt(prompt('¿Deseas agregar un alimento a tu lista de compras? Responde 1 si es Sí o 2 si es No.'));
    if (lista === 2) {
        break;
    }
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
console.log('Lista de compras:');
console.log(`Frutas: ${frutas.join(', ')}`);
console.log(`Lácteos: ${lacteos.join(', ')}`);
console.log(`Congelados: ${congelados.join(', ')}`);
console.log(`Hortalizas: ${hortalizas.join(', ')}`);
console.log(`Dulces: ${dulces.join(' y ')}`);
