<script>
export default {
    data() {
        return {
            recurso: {
                id: '',
                titulo: '',
                descripcion: '',
                ligazon: '',
            }
        }
    },
    emits: ['engadirRecurso']
}
</script>
<template>
    <form>
        <label>ID</label>
        <input type="text" v-model="recurso.id">

        <label>Título</label>
        <input type="text" v-model="recurso.titulo">

        <label>Descripción</label>
        <input type="text" v-model="recurso.descripcion">

        <label>Ligazón</label>
        <input type="text" v-model="recurso.ligazon">
        <br>
        <button @click.prevent="$emit('engadirRecurso', this.recurso)">Engadir</button>
    </form>
</template>
<style>
form {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form>button {
    width: 100px;
    padding: 0.5rem;
    background-color: black;
    color: aqua;
}
</style>