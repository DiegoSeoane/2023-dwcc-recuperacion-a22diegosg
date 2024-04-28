let sortedRows = Array.from(taboaOrdenar.tBodies[0].rows)
    .sort((a, b) => a.cells[0].innerHTML.localeCompare(b.cells[0].innerHTML));

taboaOrdenar.tBodies[0].append(...sortedRows);
