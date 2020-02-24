var map = new Map();
function funcao () {}
var objeto = {};

map.set("string", "Sou uma string");
map.set(funcao, "Sou uma funcao");
map.set(objeto, "Sou um objeto");

//get
console.log(map.get("string"));
console.log(map.get(funcao));
console.log(map.get(objeto));

//tamanho
console.log(map.size);

//valor existe
console.log(map.has("string"));
console.log(map.has("stringnovo"));

//delete
map.delete("string");
console.log(map.has("string"));

//delete all
// map.clear();
console.log(map.size);

//metodos iteraveis
for (var key of map.keys()) {
    console.log(key);
}

for (var valor of map.values()) {
    console.log(valor);
}

for (var entrada of map.entries()) {
    console.log(entrada);
}