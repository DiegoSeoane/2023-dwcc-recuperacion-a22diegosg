let canvas = document.querySelector('canvas');
let decrease = document.getElementById('decrease');
let increase = document.getElementById('increase');
let size = document.getElementById('size');
let color = document.getElementById('color');
let clear = document.getElementById('clear');
canvas.addEventListener('click',(ev)=>{    
        const ctx = canvas.getContext("2d");    
        console.log(Number.parseInt(size.innerText));
        ctx.beginPath();
        console.log(ev.screenX, ev.clientX);
        ctx.arc(x, y, Number.parseInt(size.innerText),0, 2 * Math.PI);           
        ctx.fillStyle = color.value;
        ctx.fill(); 
});

