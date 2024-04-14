function firstLetterCap(string) {
    let array = string.split(' ');
    let novoArray = [];
    for (const elemento of array) {
        novoArray.push(elemento.replace(elemento.charAt(0), elemento.charAt(0).toUpperCase()))
    }
    console.log(novoArray.join(' '));
}
firstLetterCap('el hombre sabio querrá estar siempre con el que es mejor que él')