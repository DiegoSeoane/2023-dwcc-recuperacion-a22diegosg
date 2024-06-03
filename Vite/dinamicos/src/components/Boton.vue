<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>
<template>
    <div>
        <p>{{ count }}</p>
        <button @click="this.count++">Incrementar</button>
    </div>
</template>
<style>
div {
    width: 100px;
    text-align: center;
}
</style>