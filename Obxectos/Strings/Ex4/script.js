const flightsInfo = '_Delayed_Departure;scq93766109;bio2133758440;11:25';
const reg = /_/;
let infoVoo = flightsInfo.replace(reg ,' ');
console.log(infoVoo);