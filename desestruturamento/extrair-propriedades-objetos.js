const Usuario = {
    nome: 'Matheus',
    sobrenome: 'Souza',
    senha: 'qwe123',
    email: 'mh.matheussouza@gmail.com',
    profissao: 'Programador',
    github: 'https://github.com/matheus-souza',
};

const {email, profissao, github, cartao} = Usuario;
console.log(email);
console.log(profissao);
console.log(github);
console.log(cartao);

//rotulos
const Pessoa = {
    sobrenome: 'Alberto',
    nomeDaMae: 'Maria'
};

const {sobrenome: apelido, nomeDaMae: mae} = Pessoa;
console.log(apelido, mae);

//extração de multiplos valores
const suco = {
    sabor: 'uva',
    quantidade: '500ml',
    valor: 'R$ 2,25'
};

const doce = {
    tipo: 'açucar'
};

function descreveSuco({sabor, quantidade}, {tipo}) {
    return `Este suco é de sabor ${sabor} e possui ${quantidade} adoçado com ${tipo}`;
}

console.log(descreveSuco(suco, doce));