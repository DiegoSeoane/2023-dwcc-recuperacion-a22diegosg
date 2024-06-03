<script>
export default {
    data() {
        return {
            foods: ['Apple', 'Pizza', 'Rice', 'Fish', 'Cake'],
        };
    },
};
</script>
<template>
    <slot v-for="x in foods" :key="x" :foodName="x"></slot>
</template>
<style></style>