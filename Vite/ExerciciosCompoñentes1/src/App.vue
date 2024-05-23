<script>
import { createApp } from 'vue';
import App from './App.vue';
import Message from './components/Message.vue';
import Button from './components/Button.vue';
import Persoa from './components/Persoa.vue'
export default{
    components:{
        Message,
        Button,
        Persoa
    }
}
</script>
<template>
    <!-- <Message></Message>
    <br>
    <Button></Button> -->
    <Persoa></Persoa>
</template>
<style>
</style>