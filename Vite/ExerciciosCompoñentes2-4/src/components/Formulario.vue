<script>
export default {
    emits: ['subFormNome'],
    data() {
        return {
            newNome: '',
            newDate: ''
        }
    }
}
</script>

<template>
  <form >
    <label>Inserta o nome</label>
    <input type="text" name="insertName" id="name0" v-model="newNome">
    <label>Inserta a data de nacemento</label>
    <input type="text" name="insertDate" id="date0"  v-model="newDate">
    <button @click.prevent="$emit('subFormNome', newNome, newDate)">Enviar</button>
    
  </form>
</template>

<style>
form{
    width: 300px;
    display: flex;
    flex-direction: column;
}
</style>
