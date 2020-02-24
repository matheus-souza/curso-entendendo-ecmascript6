var numeros = [1, 2, 3, 4, 5];

//utilizando para somar os itens do array
var soma = numeros.reduce((soma, numero) => {
    return soma + numero;
}, 0);

console.log(soma);

var alunos = [
    {nome: 'José', idade: 18},
    {nome: 'João', idade: 14},
    {nome: 'Maria', idade: 15},
    {nome: 'Joana', idade: 19},
];

//utilizando para salvar apenas os nomes num novo array
var nomes = alunos.reduce((nomes, aluno) => {
    nomes.push(aluno.nome);
    return nomes;
}, []);

console.log(nomes);