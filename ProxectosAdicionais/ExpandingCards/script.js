let paneles = document.querySelectorAll('.panel');

for (const panel of paneles) {
    panel.addEventListener('click',()=>{
        for (const panelNoActivo of paneles) {
            panelNoActivo.className = "panel";
        }
    panel.classList.add('active')
    })
}