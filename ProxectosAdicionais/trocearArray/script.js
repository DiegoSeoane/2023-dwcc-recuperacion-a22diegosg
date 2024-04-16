function trocearArray(arrayInicial, numero) {

    let arrayFinal = [];
    let arrayDividido;
    for (const indice in arrayInicial) {        
        arrayDividido = arrayInicial.slice(0,numero);
        if (arrayDividido.length != 0) {
            arrayFinal.push(arrayDividido);
        }
        arrayInicial = arrayInicial.splice(numero,numero);        
    }
    return arrayFinal;
}

console.log(trocearArray([1, 2, 3, 4], 2));
console.log(trocearArray([1, 2, 3, 4], 3));