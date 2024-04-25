let form = document.querySelector('form');
console.log(form.children[3].innerHTML);
console.log(form.children[3].innerText);
console.log(form.children[3].textContent);

let firstInputSexo = document.querySelector('input[name=sexo]');
console.log(firstInputSexo.value);
console.log(document.querySelector('input[name=sexo]:checked').value);
for (const li of document.querySelectorAll('li')) {
    console.log(li.innerHTML);
}
console.log(document.querySelectorAll('li').length);

console.log(document.querySelector('[data-widget-name]').getAttribute('data-widget-name'));