<script>
export default {
    data() {
        return {
            close: true
        }
    }
}
</script>

<template>
    <Teleport to="body">
        <div v-if="close" class="modal">
            <p>Empty field!</p>
            <button @click="close = false">Close</button>
        </div>
    </Teleport>
</template>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>