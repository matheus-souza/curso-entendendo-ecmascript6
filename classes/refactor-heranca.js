class Carro {
    constructor(modelo, chassi, qtdPortas) {
        this.modelo = modelo;
        this.chassi = chassi;
        this.qtdPortas = qtdPortas;
    }

    andar() {
        console.log('vrum vrum');
    }

    static abrirPorta() {
        console.log('abrindo porta...');
    }

    static fecharPorta() {
        console.log('fechando porta...');
    }
}

class Sonix extends Carro {
    constructor(modelo, chassi, qtdPortas) {
        super(modelo, chassi, qtdPortas);
    }

    abrirTetoSolar() {
        console.log('abrindo teto solar');
    }
}

const carroBasico = new Carro('Basico', '234567890', 2);
console.log(carroBasico);
carroBasico.andar();

const sonix = new Sonix('Sonix', '123456789', 4);
console.log(sonix);
sonix.andar();
sonix.abrirTetoSolar();

Carro.abrirPorta();
Carro.fecharPorta();