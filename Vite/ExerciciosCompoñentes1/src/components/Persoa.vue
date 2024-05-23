<script>
export default{
    data(){
        return{
            persoa:{
                nome:'Ada Lovelace',
                telefono: '0123 45678 90',
                correo: 'ada@localhost.com'
            },
            showDiv: false,
            textoMostrar:'Mostrar'
        }
    },
    methods:{
        changeShow(){
            if (this.showDiv) {
                this.showDiv = false;
                this.textoMostrar = 'Mostrar';
            }else{
                this.showDiv = true;
                this.textoMostrar = 'Ocultar';
            }
        }
    }
}
</script>
<template>
    <h1>LISTADO</h1>
    <br>
    <h2>{{ persoa.nome }}</h2>
    <br>
    <button @click="changeShow">{{ textoMostrar }}</button>
    <br>
    <div v-show="showDiv">
        <p>Teléfono: {{ persoa.telefono }}</p>
        <p>Correo: {{ persoa.correo }}</p>
    </div>
</template>