<script>
import Boton from './components/Boton.vue'
import AreaTexto from './components/AreaTexto.vue'

export default {
  components: {
    Boton,
    AreaTexto
  },
  data() {
    return {
      currentTab: 'Boton'
    }
  }
}

</script>

<template>
  <input type="radio" name="radio" id="boton" @click="currentTab = 'Boton'"> Boton <br>
  <input type="radio" name="radio" id="texto" @click="currentTab = 'AreaTexto'"> Textarea
  <KeepAlive exclude="AreaTexto">
    <component :is="currentTab"></component>
  </KeepAlive>
</template>

<style></style>
