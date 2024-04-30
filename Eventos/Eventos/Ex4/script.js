let clickme = document.querySelector('span');
clickme.style.cursor = 'pointer';

clickme.addEventListener('click',(ev)=>{
    let ul = document.querySelector('ul');
    console.log(ul.className);
    if (ul.className === 'oculto') {
        ul.classList.remove('oculto');
    }else{
        ul.classList.add('oculto');
    }
});