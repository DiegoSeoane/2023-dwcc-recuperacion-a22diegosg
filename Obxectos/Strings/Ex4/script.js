const flightsInfo = '_Delayed_Departure;scq93766109;bio2133758440;11:25';
let infoVoo = flightsInfo.replace('_', ';').replace(':', 'h').split(';').join(' ');


console.log(infoVoo);