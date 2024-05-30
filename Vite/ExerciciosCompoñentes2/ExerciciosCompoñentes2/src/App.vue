<script>
import { createApp } from 'vue';
import App from './App.vue';
import Persoa from './components/Persoa.vue';
import Formulario from './components/Formulario.vue'
export default {
  data() {
    return {
      personas: [{
        id: '1',
        nome: 'Ada Lovelace',
        telefono: '0123 45678 90',
        correo: 'ada@localhost.com',
        favorito: true
      },
      {
        id: '2',
        nome: 'Odor Lovelance',
        telefono: '0123 45678 91',
        correo: 'odor@localhost.com',
        favorito: false
      },
      {
        id: '3',
        nome: 'Rick Deckard',
        telefono: '0123 45678 99',
        correo: 'rick@localhost.com',
        favorito: false
      }
      ],
      showForm:false
    }
  },
  
  methods:{
    isFav(persoa){
      persoa.favorito = !persoa.favorito
    },
    toggleFormVisibility(){
      this.showForm = !this.showForm
    },
    addPersoas(newPersoa){
      this.personas.push(newPersoa);
      console.log(newPersoa);
    },
    deletePersoa(persoa){
      
    }
},
  components: {
    Persoa,
    Formulario
  }
}
</script>
<template>
  <h1>LISTADO</h1>
  <Persoa v-for="persoa in personas" :key="persoa.id" :nome="persoa.nome" :telefono="persoa.telefono" :correo="persoa.correo"
    :favorito="persoa.favorito" @changeFav="isFav(persoa)"></Persoa>
    <br>
    <button @click="toggleFormVisibility">Show Form</button>
    <div >
      <Formulario v-show="this.showForm" @addNewPersoa="addPersoas"></Formulario>
    </div>
    
</template>
<style></style>