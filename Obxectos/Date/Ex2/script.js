let arrayDias = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

let fecha = new Date();
fecha.setMonth(6, 25);

console.log(arrayDias[fecha.getDay()]);