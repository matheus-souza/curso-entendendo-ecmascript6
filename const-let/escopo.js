var mensagem = 'olá';
{
    var mensagem = 'adeus';
}

//escopo de função
function mensagem() {
    var mensagem = 'adeus';
}

console.log(mensagem);

//escopo de bloco vs escopo de função
//var -> escopo de função
//let -> escopo de bloco
var arrayVar = [];
for (var i = 0; i < 5; i++) {
    arrayVar.push(() => {
        console.log(i);
    });
}

var arrayLet = [];
for (let i = 0; i < 5; i++) {
    arrayLet.push(() => {
        console.log(i);
    });
}

arrayVar.forEach((funcao) => {
    funcao();
});
console.log('---------- let ----------');
arrayLet.forEach((funcao) => {
    funcao();
});