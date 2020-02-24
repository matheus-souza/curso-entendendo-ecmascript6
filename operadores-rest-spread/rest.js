function somaTudo(...valores) {
    let soma = 0;
    const qtd = valores.length;

    for (let i = 0; i < qtd; i++) {
        soma += valores[i];
    }

    console.log(soma);
}

somaTudo(1);
somaTudo(1, 2);
somaTudo(1, 2, 3);

//refactor
function somaTudoRef(...valores) {
    return valores.reduce((soma, valor) => {
        return soma + valor;
    }, 0);
}

console.log(somaTudoRef(1));
console.log(somaTudoRef(1, 2));
console.log(somaTudoRef(1, 2, 3));

//parametros fixos
function multiplicaPorESoma(multiplicador, ...valores) {
    return valores.reduce((soma, valor) => {
        return soma + (valor * multiplicador);
    }, 0);
}

console.log(multiplicaPorESoma(2, 1, 2));
console.log(multiplicaPorESoma(2, 6, 7));