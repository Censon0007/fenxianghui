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

<style lang="scss">
@import './common/reset/reset.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cube-dialog-content{
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}
.cubeic-important{
  background-image: linear-gradient(230deg, #FFC33D 0%, #FF4D36 100%);
  color: #fff;
}

</style>
