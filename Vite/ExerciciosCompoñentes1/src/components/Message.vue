<script>
export default {
    data() {
        return {
            message: 'ola mundo!',
            mayusculas: false,
        };
    },
    methods:{
        turnToUpper(){
            if (!this.mayusculas) {
                this.message = this.message.toUpperCase();
                this.mayusculas = true;
            }else{
                this.message = this.message.toLowerCase();
                this.mayusculas = false;
            }            
        }
    }    
};
</script>
<template>
    <p>{{ message }}</p>
    <button @click="turnToUpper">Upper-Lower</button>
</template>