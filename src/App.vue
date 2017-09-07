<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view ></router-view>
    <router-view name="hello"></router-view>
    <button @click="tst">按钮 </button>
    <vNav></vNav>
  </div>
</template>

<script>
import vNav from '@/components/Nav'
export default {
  name: 'app',
  components: {
    vNav
  },
  methods: {
    tst () {
      alert(2)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
