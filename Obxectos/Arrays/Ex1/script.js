function indices(elemento, arrayElementos) {
    let novoArray = [];
    for (const elementoArray in arrayElementos) {
        if (arrayElementos[elementoArray] === elemento) {
            novoArray.push(elementoArray);
        }
    }
    console.log(novoArray);
}
const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
indices(1, numeros)