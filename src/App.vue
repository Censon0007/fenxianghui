<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      inputCardValue: ''
    }
  },
  methods: {
    inputChange() {
      console.log('inputChange')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './common/reset/reset.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
