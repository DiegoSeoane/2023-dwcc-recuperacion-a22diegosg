let botones = document.querySelectorAll('button');

for (const boton of botones) {
    boton.addEventListener('click',()=>{                        
            boton.parentElement.classList.toggle('active');
    })
}
