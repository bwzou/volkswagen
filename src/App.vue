<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$router.push('/launch')
  }
}
</script>

<style>
#app {
  font-family: NotoSansHans-Regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #2c3e50;
}
</style>
