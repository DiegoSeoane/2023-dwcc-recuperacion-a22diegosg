let boton = document.querySelector('button');

boton.addEventListener('click',(ev)=>{
    ev.preventDefault();
    let input = document.querySelector('input');
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    li.innerText = input.value;
    ul.append(li);
});