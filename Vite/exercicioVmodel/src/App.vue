<script>
import Control from './components/Control.vue'
export default {
  components: {
    Control
  },
  methods: {
    baixo() {
      console.log('baixo');
    },
    medio() {
      console.log('medio');
    },
    alto() {
      console.log('alto');
    }
  }
}
</script>
<template>
  <form>
    <Control v-model:baixoB="baixo" v-model:medioB="medio" v-model:altoB="alto"></Control>
  </form>
</template>

<style></style>
