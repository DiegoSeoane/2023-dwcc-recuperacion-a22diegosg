let table = document.getElementById('taboaOrdenar');
for (const tr of table.tBodies[0].children) {
    console.log(tr.firstElementChild.innerHTML);
}