function* percorreLinha477() {
    console.log('passei pela rua 1');
    yield 'Parada 1';
    console.log('passei pela rua 2');
    yield 'Parada 2';
    console.log('passei pela rua 3');
    yield 'Parada 3';
    console.log('passei pela rua 4');
    yield 'Fim da linha';
}

const linha = percorreLinha477();
/*let next = linha.next();
while (!next.done) {
    console.log(next);
    next = linha.next();
}*/
for (let parada of linha) {
    console.log(parada);
}