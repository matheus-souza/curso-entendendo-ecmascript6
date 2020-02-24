function Carro(modelo, chassi, qtdPortas) {
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas;
}

Carro.prototype.andar = () => {
    console.log('vrum vrum');
};

function Sonix(modelo, chassi, qtdPortas) {
    Carro.call(this, modelo, chassi, qtdPortas)
}

Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix;

Sonix.prototype.abrirTetoSolar = () => {
    console.log('abrir teto solar');
};


let sonix = new Sonix('Sonix', '1234567899909', 5);
console.log(sonix);
sonix.andar();
sonix.abrirTetoSolar();