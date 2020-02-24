//duas maneiras de criar objetos
// - funções construtoras
function Livro(titulo) {
    this.titulo = titulo;
}

let livro = new Livro('Harry Potter');
console.log(livro);

// - objetos literais -> mantém a referência em memória do objeto
let livroLiteral = {
    titulo: 'Anjos e Demônios'
};
console.log(livroLiteral);

let livro2 = livroLiteral;
livro2.titulo = 'O Código da Vinci';
console.log(livroLiteral);
console.log(livro2);

//adicionando propriedades
livroLiteral.autor = 'Dan Brown';
livroLiteral['mostrarLivro'] = function () {
    console.log(`${this.titulo}, ${this.autor}`)
};
livroLiteral.mostrarLivro();