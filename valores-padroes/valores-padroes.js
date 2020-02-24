function imprimirNomeCompleto(nome, sobrenome, nomeDoMeio = '') {
    console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
}

imprimirNomeCompleto('Matheus', 'de Souza', 'Henrique');
imprimirNomeCompleto('Matheus', 'de Souza');

function calculaPotencia(x = 2, y = x) {
    console.log(Math.pow(x, y))
}

calculaPotencia(); //2^2
calculaPotencia(3); //3^3
calculaPotencia(2, 3); //2^3

const v = 'valor 1';
function funcao(x = v) {
    const v = 'valor 2';
    console.log(x);
}

funcao();

function exibeNome(nome, callback = parametro => {
    console.log(`Callback padrão: ${parametro}`);
}) {
    callback(nome);
}

exibeNome('Muriel');
exibeNome('Novo nome', nomeRecebido => {
    console.log(`Nome recebido: ${nomeRecebido}`);
});

function parametroObrigatórioValid(parametro) {
    throw new Error(`O parâmetro ${parametro} é obrigatório!`);
}

//exemplo pratico
function inserirNaTela(objeto = parametroObrigatórioValid('objeto')) {
    //lógica de implementação do método
}

inserirNaTela('parametro');