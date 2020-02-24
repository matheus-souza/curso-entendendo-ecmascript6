
let promiseAsync = new Promise((resolve, reject) => {
    let resultado = false;
    let tempo = 2000;

    setTimeout(() => {
        if (resultado) {
            resolve('ok');
        } else {
            reject('not ok!');
        }
    }, tempo)
});

promiseAsync.then((data) => console.log(`${data}`));
promiseAsync.catch((data) => console.log(`${data}`));

console.log('fui executado!');