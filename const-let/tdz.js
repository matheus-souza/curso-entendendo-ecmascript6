//hoisting -> tdz
var nome;
nome = 'matheus';
imprimirNome(nome);

function imprimirNome(nome) {
    console.log('nome', nome);
}

//muito cuidado com o escopo de variável
let valor = 0;
if (true) {
    let valor = 1;
    console.log(valor);
}
console.log(valor);