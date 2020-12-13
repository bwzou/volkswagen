<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Launch></Launch>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Launch from "./views/Launch";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Launch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #2c3e50;
}
</style>
