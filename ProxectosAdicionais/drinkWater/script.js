let cups = document.querySelectorAll('.cup');
let liters = document.querySelector('#liters');
let remained = document.querySelector('.remained');
let percentage = document.querySelector('.percentage');
liters.innerHTML = '2L';
for (const i in cups) {
    cups[i].addEventListener('click', (ev) => {
        cups[i].classList.toggle('full');
        let fullAgua = 2;
        if (cups[i].className.includes('full')) {
            let totalAuga = 0;
            let count = 0;
            let porcentaxe = 0;
            while (count != i) {
                cups[count].classList.add('full');
                count++;
                totalAuga += 0.25;
                porcentaxe += 12.5;
            }
            liters.innerHTML = fullAgua - totalAuga + 'L';
            if (liters.innerHTML === '0L') {
                remained.style.visibility = 'hidden';
                remained.style.height = 0;
            } else {
                remained.style.visibility = 'visible'
            }
            percentage.style.height = porcentaxe + '%';
            percentage.innerHTML = porcentaxe + '%';
            if (porcentaxe == 0) {
                percentage.innerHTML = ''
            }
        } else {
            fullAgua = 0
            let totalAuga = 0;
            let count = i;
            let porcentaxe = 100;
            while (count != cups.length) {
                cups[count].classList.remove('full');
                count++;
                totalAuga += 0.25;
                porcentaxe -= 12.5;
            }
            liters.innerHTML = fullAgua + totalAuga + 'L';
            if (liters.innerHTML === '0L') {
                remained.style.visibility = 'hidden';
                remained.style.height = 0;
            } else {
                remained.style.visibility = 'visible';

            }
            percentage.style.height = porcentaxe + '%';
            percentage.innerHTML = porcentaxe + '%';
            if (porcentaxe == 0) {
                percentage.innerHTML = ''
            }
        }
    })
}