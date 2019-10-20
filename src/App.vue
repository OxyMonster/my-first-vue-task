<template>
  <div id="app">
    <app-form></app-form>
  </div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: 'app-forom',
  components: {
    'app-form':Form
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #1A1C37;
    font-family: 'Montserrat', sans-serif;


  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
#app {
  width: 50%; 
  margin-top: 2%;


}
</style>
