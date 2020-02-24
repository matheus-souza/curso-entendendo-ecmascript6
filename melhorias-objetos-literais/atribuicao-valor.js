let nome = 'Maria';
let sobrenome = 'Madalena';

const seApresentar = function () {
    console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
};

let pessoa = {
    nome,
    sobrenome,
    seApresentar,
    seApresetarRefactored() {
        console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
    }
};
console.log(pessoa);

pessoa.seApresentar();
pessoa.seApresetarRefactored();

//propriedade computada
const nomeMetodo = 'invocar';
const objetoComputado = {
    [nomeMetodo]() {
        console.log('Executou o método');
    }
};

objetoComputado.invocar();

const nomeFuncao = 'mostrar';
const propriedade = 'Nome';

const objeto = {
    Nome: 'Objeto',
    [`${nomeFuncao}${propriedade}`]() {
        console.log(this[propriedade]);
    }
};
objeto.mostrarNome();