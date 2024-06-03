<script>
export default {
    data() {
        return {
            textoA: ''
        }
    }
}
</script>
<template>
    <textarea name="texto" id="texto" v-model="textoA"></textarea>
    <p>{{ textoA }}</p>
</template>
<style>
div {
    width: 100px;
    text-align: center;
}
</style>