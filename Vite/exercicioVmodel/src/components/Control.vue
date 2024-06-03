<script>
export default {
    props: ['baixoB'],
    emits: ['update:baixoB', 'update:medioB', 'update:altoB']
}
</script>

<template>
    <ul>
        <li>
            <button type="button" @click="$emit('update:baixoB')">Baixo</button>
        </li>
        <li>
            <button type="button">Medio</button>
        </li>
        <li>
            <button type="button">Alto</button>
        </li>
    </ul>
</template>

<style></style>
