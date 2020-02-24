var alunos = [
    {nome: 'José', idade: 18},
    {nome: 'João', idade: 14},
    {nome: 'Maria', idade: 15},
    {nome: 'Joana', idade: 19},
];

var aluno = alunos.find((aluno) => {
    return aluno.nome === 'José';
});

console.log(aluno);