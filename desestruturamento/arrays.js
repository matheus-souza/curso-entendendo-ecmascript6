const cores = ['azul', 'cinza', 'branco', 'preto'];

const [cor1,,,cor3] = cores;
console.log(cor1, cor3);

//agenda
const contatos = [
    {
        nome: 'Alex Santos',
        numero: '12345-6789'
    },
    {
        nome: 'João Silva',
        numero: '12345-9876'
    },
    {
        nome: 'Etetison dos Santos',
        numero: '54321-6789'
    }
];

function mostraNumeroDoJoao([, {numero}]) {
    console.log(numero);
}

mostraNumeroDoJoao(contatos);