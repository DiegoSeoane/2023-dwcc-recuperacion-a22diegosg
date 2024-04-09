console.log('Apartado A');

console.log(Math.floor(Math.random() * 4));

console.log('Apartado B');

console.log(Math.floor(Math.random() * (4 - 1) + 1));

console.log('Apartado C');

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

console.log(numeroAleatorio(5, 10));
