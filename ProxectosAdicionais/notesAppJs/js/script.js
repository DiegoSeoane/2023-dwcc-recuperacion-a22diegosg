let addNote = document.querySelector('#add');
let body = document.querySelector('body');
let notes = JSON.parse(localStorage.getItem('notas'));

if (notes) {
    for (const nota of notes) {
        createNote(nota);
    }
}


addNote.addEventListener('click',(ev)=>{
    ev.preventDefault();
    createNote();    
});

function createNote(textValue = '') {
    let note = document.createElement('div');
    note.classList.add('note');
    
    let tools = document.createElement('div');
    tools.classList.add('tools');
    
    let edit = document.createElement('button');
    edit.classList.add('edit');

    let iedit = document.createElement('i');
    iedit.classList.add('fas');
    iedit.classList.add('fa-edit')

    let trash = document.createElement('button');
    trash.classList.add('delete');

    let itrash = document.createElement('i');
    itrash.classList.add('fas');
    itrash.classList.add('fa-trash-alt')


    edit.append(iedit);
    trash.append(itrash);
    
    tools.append(edit);
    tools.append(trash);

    
    
    let main = document.createElement('div');
    main.classList.add('main');
    let paragrafo = document.createElement('p');
    main.append(paragrafo);
    if (textValue === '') {        
        main.classList.add('hidden');
    }
    
    
    let textA = document.createElement('textarea');
    if (textValue != '') {
        textA.classList.add('hidden');
        paragrafo.innerHTML = marked.parse(textValue);
    }
    textA.value = textValue;
    textA.rows = 6;
    
    note.append(tools);
    note.append(main);
    note.append(textA);

    body.append(note);

    trash.addEventListener('click',(ev)=>{
        ev.preventDefault();
        note.remove();
        saveLocalStorage()
    });
    edit.addEventListener('click',(ev)=>{
        ev.preventDefault();        
        if (main.classList.contains('hidden')) {
            paragrafo.innerHTML = marked.parse(textA.value);
            textA.classList.add('hidden');
            main.classList.remove('hidden');
        }else{
            main.classList.add('hidden');
            textA.classList.remove('hidden');
        }
        saveLocalStorage()
    });
    
}


function saveLocalStorage() {
    let textoNotas = document.querySelectorAll('textarea');
    let notas = [];

    for (const textoNota of textoNotas) {
        if (textoNota.value != '') {
            notas.push(textoNota.value);
        }
    }
    localStorage.setItem('notas', JSON.stringify(notas));
}

