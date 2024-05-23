const { createApp } = Vue;
createApp({
    data(){
        return{
            texto:'',
            textoEnter:''
        }        
    },
    methods:{
        botonCentral(){
            console.log('pulsando boton central');
        },
        enterText(){
            this.textoEnter = 'texto con enter';
            console.log(this.textoEnter);
        }
    }
}).mount('#app');