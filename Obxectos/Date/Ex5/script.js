function finde(day, month, year) {
    let date = new Date(year.toString());
    date.setMonth(month - 1);
    date.setDate(day);
    if (date.getDay() == 0 || date.getDay() == 6) {
        console.log('Fin de semana');
    } else {
        console.log('Non é fin de semana');
    }
}

finde(2, 4, 1997);