var livros = [
    {titulo: "O Poder do Hábito", autor: "Charles Duhigg", local: "A1"},
    {titulo: "Como Fazer Amigos e Influenciar Pessoas", autor: "Dale Carnegie", local: "D2"},
    {titulo: "Geração de Valor", autor: "Flávio Augusto da Silva", local: "L3"},
    {titulo: "Os segredos da mente milionária", autor: "T. Harv Eker", local: "O4"}
];

var estantes = new Map();
for (var livro of livros ) {
    estantes.set(livro.titulo, livro.local);
}

function getLocalizacaoDoLivro(titulo) {
    var estante = estantes.get(titulo);
    if (estante === undefined) {
        return 'Livro não encontrado no acervo!';
    }

    return estante;
}

var localizacao = getLocalizacaoDoLivro('Geração de Valor');
console.log(localizacao);