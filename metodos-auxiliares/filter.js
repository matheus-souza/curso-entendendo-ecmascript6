var alunos = [
    {nome: 'José', idade: 18},
    {nome: 'João', idade: 14},
    {nome: 'Maria', idade: 15},
    {nome: 'Joana', idade: 19},
];

var alunosDeMaior = alunos.filter((aluno) => {
    return aluno.idade >= 18;
});

console.log(alunosDeMaior);