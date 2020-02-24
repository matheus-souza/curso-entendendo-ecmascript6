function contaQuantidadeVogaisSemAcento(...palavras) {
    let qtdVogais = 0;
    for (let palavra of palavras) {
        let palavraLowerCase = palavra.toLowerCase();
        const letras = [...palavraLowerCase];

        for (let letra of letras) {
            if ('aeiou'.indexOf(letra) !== -1) {
                qtdVogais++;
            }
        }
    }

    console.log(qtdVogais);
}

contaQuantidadeVogaisSemAcento('es6');
contaQuantidadeVogaisSemAcento('java', 'javascript', 'php');
contaQuantidadeVogaisSemAcento('NãO ConSideRa AcentUADos');