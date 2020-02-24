let promise = new Promise((resolve, reject) => {
    // throw new Error("Erro!");
    resolve('ok!');
});

promise.then((data) => {
    console.log(`sucesso: ${data}`);
    throw new Error('erro!');
    return data;
}).then((data) => {
    console.log(`sucesso: ${data}`);
}).catch((data) => {
    console.log(`falha: ${data}`);
});