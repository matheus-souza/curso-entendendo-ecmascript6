//semelhante ao apply
var args = [1, 2, 3];
console.log(...args);

//lista de compras
const listaMae = ['leite', 'ovos', 'papel'];
const listaNamorada = ['arroz', 'feijão', 'suco'];
const listaEscritório = ['papel a4', 'caneta', 'clipe de papel'];

const listaCompras = [...listaMae, ...listaNamorada, ...listaEscritório];
console.log(listaCompras);