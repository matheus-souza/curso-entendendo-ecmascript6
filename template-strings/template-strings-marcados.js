const nome = 'Nome';
const anos = 22;

function marcacao(strings, ...valores) {
    //possibilita criar uma lógica e montar a string da mensagem
    console.log(strings[0]);
    console.log(valores[0]);
    console.log(strings[1]);
    console.log(strings[1]);
    console.log(strings[2]);

    return 'oi';
}

var mensagem = marcacao`Meu nome é ${nome} e eu tenho ${anos} anos`;
console.log(mensagem);