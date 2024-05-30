<script>
export default{
    data(){
        return{            
            showDiv: false,
            textoMostrar:'Mostrar',
            fav:this.favorito
        }
    },
    emits:['changeFav','delete'],
    props:['nome', 'telefono', 'correo','favorito'],
    methods:{
        changeShow(){
            if (this.showDiv) {
                this.showDiv = false;
                this.textoMostrar = 'Mostrar';
            }else{
                this.showDiv = true;
                this.textoMostrar = 'Ocultar';
            }
        },
        changeFav(){
            this.fav = !this.fav;
            this.$emit('changeFav');
        }
    }
}
</script>
<template>
    <h2>{{ nome }} <button @click="delete">Fav</button><button @click="changeFav">Borrar</button></h2>    
    <button @click="changeShow">{{ textoMostrar }}</button>    
    <div v-show="showDiv">
        <p>Teléfono: {{ telefono }}</p>
        <p>Correo: {{ correo }}</p>
    </div>
</template>