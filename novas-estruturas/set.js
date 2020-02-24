var musica_1 = {titulo: 'Sem você meu coração é null', autor: 'Oracle'};
var musica_2 = {titulo: 'Meu coração é componentizado', autor: 'React'};
var musica_3 = {titulo: 'Tudo isso é tão dinâmico', autor: 'JavaScript'};
var musica_4 = {titulo: 'Não me chame depois...', autor: 'Node'};
var musica_5 = {titulo: 'No amor não exite rollback', autor: 'SQL'};

var playlist = new Set([musica_4]);

//adicionar uma musisa
playlist.add(musica_1);
playlist.add(musica_3);

//remover uma musica
// playlist.delete(musica_1);

//remover todas as musicas
// playlist.clear();

//adicionar musica duplicada
playlist.add(musica_1);

//ver quantas musicas tem
console.log(playlist.size);

for (var musica of playlist) {
    console.log(musica);
}