function diasDendeInicioDeAno(day, month, year) {
    let initialDay = new Date(year.toString());
    let actualDay = new Date(year.toString());
    actualDay.setMonth(month - 1, day)
    let milisegundos = actualDay.getTime() - initialDay.getTime();
    console.log(Math.floor(milisegundos / 1000 / 60 / 60 / 24));
}
diasDendeInicioDeAno(14, 4, 2023)