function minToHour(min) {
    let horas = Math.trunc(min / 60);
    let minutos = Math.floor(min % 60);
    if (minutos < 10) {
        console.log(horas + ':' + '0' + minutos);
    } else {
        console.log(horas + ':' + minutos);
    }
}
minToHour(119);