let ul = document.querySelector('ul');
let lista = document.querySelectorAll('li');
let li2 = document.createElement('li')
li2.innerHTML = '2';
li2.id = 'two';

let li3 = document.createElement('li')
li3.innerHTML = '3';
li3.id = 'three';

lista[0].after(li2);
ul.lastElementChild.before(li3)