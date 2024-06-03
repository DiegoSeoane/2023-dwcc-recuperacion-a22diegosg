<script>
import Info from './components/Info.vue'
import Formulario from './components/Formulario.vue'
export default {
  data() {
    return {
      persoa:{
      nome: 'Rick',
      anoNac: '01/04/65',
      }
    }
  },
  components: {
    Info,
    Formulario
  },
  methods: {
    changeNome(newNome,newDate) {
      this.persoa.nome = newNome;
      this.persoa.anoNac = newDate;
      console.log('click');
    }
  }
}
</script>

<template>
<Info :nomePersoa="persoa.nome" :anoNacemento="persoa.anoNac"></Info>
<br>
<br>
<Formulario @subFormNome="changeNome"></Formulario>

</template>

<style></style>
