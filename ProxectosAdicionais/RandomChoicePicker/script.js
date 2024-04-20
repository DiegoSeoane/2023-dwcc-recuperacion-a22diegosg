let textarea = document.querySelector('#textarea');

let divTags = document.querySelector('#tags');

textarea.addEventListener('keyup', (event) => {

    let arraytexto = event.target.value.split(',');

    divTags.innerHTML = ''
    for (const tag of arraytexto) {
        let span = document.createElement('span');
        span.innerHTML = tag;
        span.classList.add('tag');
        divTags.append(span);
    }

    if (event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '';
        }, 10);
        let intervalo = setInterval(() => {
            let tags = document.querySelectorAll('.tag');
            let randomNumber = Math.floor(Math.random() * tags.length);
            tags[randomNumber].classList.add('highlight');
            setTimeout(() => {
                tags[randomNumber].classList.remove('highlight')
            }, 200);
        }, 200);

        setTimeout(() => {
            clearInterval(intervalo);
            setTimeout(() => {
                let tags = document.querySelectorAll('.tag');
                let randomNumber = Math.floor(Math.random() * tags.length);
                tags[randomNumber].classList.add('highlight');
            }, 200)
        }, 3000)
    }
})