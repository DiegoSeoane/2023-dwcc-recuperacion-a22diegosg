const players = [
    [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",
    ],
    [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
    ],
];
console.log('Apartado A');
let [players1, players2] = players;
console.log(players1);
console.log(players2);

console.log('Apartado B');
let [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);


console.log('Apartado C');
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

console.log('Apartado D');
let players1Final = [...players1, 'Thiago', 'Coutinho',
    'Periscic'];
console.log(players1Final);