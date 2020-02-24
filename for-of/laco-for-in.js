var carro = {
    modelo: 'fiat',
    ano: 1995
};

for (var propriedade in carro) {
    var info = carro[propriedade];
    console.log(info);
}