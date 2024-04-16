let texto = document.querySelector('#textarea');

texto.addEventListener('input',(event)=>{
    if (event.target.value === ',') {
        console.log('a');
    }
})