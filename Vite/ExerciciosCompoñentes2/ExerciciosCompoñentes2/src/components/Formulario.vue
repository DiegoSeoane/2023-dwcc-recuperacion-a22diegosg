<script>
export default{
    data(){
        return{
            novaPersoa:{
                id:'',
                nome:'',
                correo:'',
                telefono:'',
                favorito:false
            }
        }
    },
    emits:['addNewPersoa']
}
</script>
<template>
<form style="text-align: center;" @submit.prevent="$emit('addNewPersoa',novaPersoa)">
    <label for="novaPersoa-id">ID</label>
    <br>
    <input type="text" id="novaPersoa-id" v-model="novaPersoa.id">
    <br>
    <label for="novaPersoa-nome">NOME</label>
    <br>
    <input type="text" id="novaPersoa-nome" v-model="novaPersoa.nome">
    <br>
    <label for="novaPersoa-correo">CORREO</label>
    <br>
    <input type="text" id="novaPersoa-correo" v-model="novaPersoa.correo">
    <br>
    <label for="novaPersoa-telefono">TELEFONO</label>
    <br>
    <input type="text" id="novaPersoa-telefono" v-model="novaPersoa.telefono">
    
    <button>Enviar</button>
   
  </form>
</template>
<style></style>