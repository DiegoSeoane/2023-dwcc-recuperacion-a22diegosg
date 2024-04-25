const table = document.querySelector('table');
for (const tr in table.rows) {
    table.rows[tr].children[tr].style.backgroundColor = "red";
}