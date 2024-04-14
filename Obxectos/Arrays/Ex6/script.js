const flightsInfo =
    "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

let arrayVuelos = flightsInfo.split('+');
arrayFinal = [];

for (const vuelo of arrayVuelos) {
    let vueloFinal = [];
    let [estado, origen, destino, hora] = vuelo.split(';');

    let estadoFinal = estado.replace('_', '').replace('_', ' ');

    let arrayOrigen = origen.split('');
    let [a, b, c, ...rest] = arrayOrigen;
    let origenFinal = [];
    origenFinal.push(a.toUpperCase());
    origenFinal.push(b.toUpperCase());
    origenFinal.push(c.toUpperCase());
    origenFinal.push(rest.join(''));

    let arrayDestino = destino.split('');
    let [d, e, f, ...resto] = arrayDestino;
    let destinoFinal = [];
    destinoFinal.push(d.toUpperCase());
    destinoFinal.push(e.toUpperCase());
    destinoFinal.push(f.toUpperCase());
    destinoFinal.push(resto.join(''));

    let arrayHora = hora.replace(':', 'h').split('')
    let horaFinal = [];
    horaFinal.push('(');
    horaFinal.push(arrayHora.join(''));
    horaFinal.push(')');

    vueloFinal.push(estadoFinal);
    vueloFinal.push(origenFinal.join(''));
    vueloFinal.push(destinoFinal.join(''));
    vueloFinal.push(horaFinal.join(''));


    arrayFinal.push(vueloFinal.join(' '));
}


for (const flight of arrayFinal) {
    console.log(flight);
}