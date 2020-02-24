var jogos = [
    {nome: 'Uncharted 4: A Thiefs End', categoria: 'ação'},
    {nome: 'Gran Turismo 6', categoria: 'corrida'},
    {nome: 'Need for Speed Most Wanted', categoria: 'corrida'},
    {nome: 'Mario Kart 8', categoria: 'corrida'},
    {nome: 'Forza Motorsport', categoria: 'corrida'}
];

//saber se ao menos um jogo é de corrida
var temJogoDeCorrida = jogos.some((jogo) => {
    return jogo.categoria === 'corrida';
});

console.log(temJogoDeCorrida);