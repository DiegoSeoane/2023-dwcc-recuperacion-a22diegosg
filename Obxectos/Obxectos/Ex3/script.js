const game = {
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
    };

console.log('Apartado A');
let array = game.scored;
let gol = 0;

for (const elemento of array) {
    gol++;
    console.log('Gol ' + gol + ': ' + elemento);
}

console.log('Apartado B');

let scorers = {};

for (const player of game.scored) {
    if (scorers[player] == true) {        
        scorers[player]++;
    }else{
        scorers[player] = 1;
    }
}
console.log(scorers);
