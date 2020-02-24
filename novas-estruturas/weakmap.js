var weakMap = new WeakMap();
var elemento1 = {atr: 1};
var elemento2 = {atr: 2};

weakMap.set(elemento1, 'sou o elemento1');
weakMap.set(elemento2, 'sou o elemento2');

console.log(weakMap.get(elemento1));
console.log(weakMap.get(elemento2));

elemento2 = null;

setTimeout(() => {
    console.log(weakMap.get(elemento2))
}, 3000);

//Na pratica code
function Pessoa(nome) {
    this._nome = nome;
}

Pessoa.prototype.getNome = () => {
    return this._nome;
};

var roberto = new Pessoa('Roberto');
console.log(roberto.getNome());
console.log(roberto._nome);

//refatorado
var Pessoa = (function () {
    var dadosPrivados = new WeakMap();

    function Pessoa(nome) {
        dadosPrivados.set(this, {nome: nome});
    }

    Pessoa.prototype.getNome = () => {
        return dadosPrivados.get(this).nome;
    };

    return Pessoa;
}());

var roberto = new Pessoa('Roberto');
console.log(roberto.getNome());
console.log(roberto._nome);