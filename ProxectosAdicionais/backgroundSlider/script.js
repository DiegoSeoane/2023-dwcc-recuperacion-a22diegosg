let divs = document.querySelectorAll('.slide');
let botonDereita = document.getElementById('right');
let botonEsquerda = document.getElementById('left');
let divActivo = 0;
let body = document.querySelector('body');

body.style.backgroundImage = divs[divActivo].style.backgroundImage;
botonDereita.addEventListener('click', () => {
    divActivo++;
    if (divActivo === divs.length) {
        divActivo = 0;
    }
    for (const div of divs) {
        div.classList.remove('active');
    }
    divs[divActivo].classList.add('active');
    body.style.backgroundImage = divs[divActivo].style.backgroundImage;
});

botonEsquerda.addEventListener('click', () => {
    divActivo--;
    if (divActivo === -1) {
        divActivo = divs.length - 1;
    }
    for (const div of divs) {
        div.classList.remove('active');
    }
    divs[divActivo].classList.add('active');
    body.style.backgroundImage = divs[divActivo].style.backgroundImage;
});
