<script>
import Component from './components/Component.vue'
import ComponentFetch from './components/ComponentFetch.vue'
export default {
  components: {
    Component,
    ComponentFetch
  }
}
</script>

<template>
  <!--<Component v-slot="comida">{{ comida.foodName }}<br></Component> -->
  <ComponentFetch v-slot="user">
    <div>
      <h1>{{ user.username }}</h1>
      <p>{{ user.body }} <span>{{ user.likes }}</span></p>
    </div>
  </ComponentFetch>
</template>

<style>
div {
  width: 300px;
  margin: 20px;
  background-color: wheat;
}

h1 {
  background-color: blue;
  color: cadetblue;
}

span {
  font-size: larger;
  background-color: red;
  color: white;
}
</style>
