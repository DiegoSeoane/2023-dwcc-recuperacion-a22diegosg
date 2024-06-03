<script>
export default {
    inject: ['recursos'],
    emits: ['borrarRecurso']
}
</script>
<template>
    <div v-for="recurso in recursos" :key="recurso.id">
        <h1>{{ recurso.titulo }} <button class="close" @click.prevent="$emit('borrarRecurso', recurso.id)">X</button>
        </h1>
        <p>{{ recurso.descripcion }}</p>
        <a v-bind:href="'recurso.ligazon'">{{ recurso.ligazon }}</a>
    </div>
</template>
<style>
div {
    width: 300px;
    text-align: center;
}

.close {
    background-color: red;
    color: white;
    padding: 10px;
    border: 1px solid black;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 100px;
}
</style>