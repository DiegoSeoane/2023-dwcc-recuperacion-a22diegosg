const gameEvents = new Map([
    [17, "GOAL"],
    [36, "Substitution"],
    [47, "GOAL"],
    [61, "Substitution"],
    [64, "Yellow card"],
    [69, "Red card"],
    [70, "Substitution"],
    [72, "Substitution"],
    [76, "GOAL"],
    [80, "GOAL"],
    [92, "Yellow card"],
    ]);

console.log('Apartado A');

let eventos = [];

for (const [minuto,evento] of gameEvents) {
    eventos.push(evento);
}
console.log(eventos);

console.log('Apartado B');

for (const [minuto,evento] of gameEvents) {
    let parte;
    if (minuto<=45) {
        parte = '[PRIMEIRA PARTE]';
    }else{
        parte = '[SEGUNDA PARTE]';
    }
    console.log(parte + ' ' + minuto + ' ' + evento);
}