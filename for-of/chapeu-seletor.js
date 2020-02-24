var chapeuSeletor = (bruxo) => {
    var casas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];
    var casa = casas[Math.floor(Math.random() * casas.length)];

    console.log(`Bruxo: ${bruxo} | Casa: ${casa}`);
};

var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];
for (var bruxo of bruxos) {
    chapeuSeletor(bruxo);
}