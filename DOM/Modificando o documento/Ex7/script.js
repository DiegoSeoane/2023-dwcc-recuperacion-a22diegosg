function crearCalendario(elemento, ano, mes) {
    let month = new Date(ano, mes - 1);
    let finalMonth = new Date(ano, mes, 0);

    let table = '<table><tr><th>L</th><th>M</th><th>Me</th><th>X</th><th>V</th><th>S</th><th>D</th></tr><tr>';

    for (let i = 0; i < month.getDay(); i++) {
        table += '<td></td>'
    }

    table += '</table>';
    elemento.innerHTML = table;
    console.log(elemento.innerHTML);
}
let calendario = document.getElementsByClassName('calendario');


crearCalendario(calendario, 2022, 11);