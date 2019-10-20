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
 -webkit-box-shadow: 0px 1px 5px 1px rgba(0,0,0,1);
-moz-box-shadow: 0px 1px 5px 1px rgba(0,0,0,1);
box-shadow: 0px 1px 5px 1px rgba(0,0,0,1);


}
</style>
