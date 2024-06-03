<script>
import Lista from './components/Lista.vue'
import Formulario from './components/Formulario.vue'
import Modal from './components/Modal.vue'
export default {
  data() {
    return {
      currentTab: 'Lista',
      isEmpty: false,
      arrayRecursos: [
        {
          id: '1',
          titulo: 'Recurso 1',
          descripcion: 'Este é o primeiro recurso',
          ligazon: 'https://recurso1.com'
        },
        {
          id: '2',
          titulo: 'Recurso 2',
          descripcion: 'Este é o segundo recurso',
          ligazon: 'https://recurso2.com'
        }
      ],

    }
  },
  provide() {
    return {
      recursos: this.arrayRecursos
    }
  },
  methods: {
    toggleTab() {
      if (this.currentTab === 'Lista') {
        this.currentTab = 'Formulario'
      } else if (this.currentTab === 'Formulario') {
        this.currentTab = 'Lista'
      }
    },
    addRecurso(recurso) {
      if (recurso.id === '' || recurso.titulo === '' || recurso.descripcion === '' || recurso.ligazon === '') {
        console.log(this.isEmpty);
        this.isEmpty = true;
      } else {
        this.arrayRecursos.push(recurso)
        this.currentTab = 'Lista';
        this.isEmpty = false;
      }
    },
    removeRecurso(idR) {
      this.arrayRecursos.splice(this.arrayRecursos.map(rec => rec.id).indexOf(idR), 1);
    }
  },
  components: {
    Formulario,
    Lista,
    Modal
  }
}
</script>
<template>
  <button @click.prevent="toggleTab">Cambiar pestaña</button>
  <br>
  <br>
  <component :is="currentTab" @engadirRecurso="addRecurso" @borrarRecurso="removeRecurso"></component>
  <div v-show="isEmpty">
    <Modal></Modal>
  </div>
</template>
<style>
button {
  padding: 1rem;
  background-color: chocolate;
  border: none;
  border-radius: 10px;
}
</style>
