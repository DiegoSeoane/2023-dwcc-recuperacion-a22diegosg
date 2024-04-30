let ligazon = document.querySelector('a');

ligazon.addEventListener('click',(ev)=>{
    ev.preventDefault();
    let oculto = document.getElementById('adicional');
    oculto.classList.remove('oculto');
    ligazon.style.display = 'none';
})