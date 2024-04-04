let progreso = document.querySelector('.progress');
let circulos = document.querySelectorAll('.circle');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

let numCirculo = 1;
let numProgreso = 0;

next.addEventListener('click', ()=>{
    
    numProgreso += 33;
    numCirculo++;

    if (numCirculo === 0) {
        prev.disabled = true;
      } else if (numCirculo === 4) {
        next.disabled = true;
      } else {
        prev.disabled = false;
        next.disabled = false;
      }
        
    progreso.style.width = numProgreso + '%';
    for (const circulo of circulos) {
        if (circulo.innerHTML == numCirculo) {
            circulo.classList.add('active');            
        }
    }    
})

prev.addEventListener('click', ()=>{
    
    numProgreso -= 33;
    numCirculo--;
    if (numCirculo === 1) {
        prev.disabled = true;
      } else if (numCirculo === 4) {
        next.disabled = true;
      } else {
        prev.disabled = false;
        next.disabled = false;
      }
    
    progreso.style.width = numProgreso + '%';
    for (const circulo of circulos) {
        if (circulo.innerHTML == numCirculo) {
            circulo.nextElementSibling.classList.remove('active');            
        }
    }    
})