const boasVindas = nome => `Seja bem vindo, ${nome}`;
console.log(boasVindas('Matheus'));

//contexto das coisas...
const equipe = {
    nome: 'Linguagens de programação',
    membros: ['JavaScript', 'Java', 'C', 'Python'],
    membrosDaEquipe: function () {
        this.membros.forEach((membro) => {
            console.log(`${membro} faz parte da equipe ${this.nome}`);
        });
    }
};

equipe.membrosDaEquipe();