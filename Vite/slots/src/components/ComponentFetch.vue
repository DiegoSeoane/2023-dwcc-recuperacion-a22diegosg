<script>
export default {
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        // mock remote data fetching
        setTimeout(() => {
            this.items = [
                { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
                { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 },
            ];
        }, 1000);
    },
};
</script>
<template>
    <slot v-for="item in items" :username="item.username" :body="item.body" :likes="item.likes"></slot>
</template>
<style></style>