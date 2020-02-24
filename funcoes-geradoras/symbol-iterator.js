const objeto = {
    valor: 10,
    [Symbol('simbolo')]: 'oi, eu sou um símbolo'
};
console.log(objeto.valor);
console.log(objeto.simbolo);

const primos = [2, 3, 5];
const iterador = primos[Symbol.iterator]();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

//criando symbol iterator
const equipe = {
    quantidade: 3,
    maturidade: 'alta',
    senior: 'Jesus',
    pleno: 'Maria',
    junior: 'José',
    [Symbol.iterator]: function* () {
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    }
};

for (let integrante of equipe) {
    console.log(integrante);
}

const timeDesenvolvimento = {
    quantidade: 3,
    senior: 'Jesus',
    pleno: 'Maria',
    junior: 'José',
    [Symbol.iterator]: function* () {
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    }
};

const timeNegocios = {
    quantidade: 2,
    diretor: 'Dean',
    vice: 'San',
    [Symbol.iterator]: function* () {
        yield this.diretor;
        yield this.vice;
    }
};

const equipeCompleta = {
    timeDesenvolvimento,
    timeNegocios,
    [Symbol.iterator]: function* () {
        yield* timeDesenvolvimento;
        yield* timeNegocios;
    }
};

for (let integrante of equipeCompleta) {
    console.log(integrante);
}