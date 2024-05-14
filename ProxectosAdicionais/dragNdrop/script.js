let listaDivs = document.querySelectorAll('div');
let fill = document.querySelector('.fill');

for (const div of listaDivs) {
    div.addEventListener('dragover',(ev)=>{
        ev.preventDefault();                
        fill.classList.add('hold');
    });
    div.addEventListener('dragenter',(ev)=>{
        ev.preventDefault();
        div.classList.add('hovered');        
    });
    div.addEventListener('dragleave',(ev)=>{
        ev.preventDefault();
        div.classList.remove('hovered')
    });    
    div.addEventListener('drop',(ev)=>{
        ev.preventDefault();     
        div.classList.remove('hovered');  
        fill.classList.remove('hold');
        ev.target.appendChild(fill)
    });
}
