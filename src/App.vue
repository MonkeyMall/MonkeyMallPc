<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import headerSlide from '@/mixins/headerSlide'
export default {
  mixins: [headerSlide],
  mounted() {
    // const _this = this;
    // console.log('_this',_this)
    // window.addEventListener('scroll', _this.onSlide())
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //background: #cccccc;
  //height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
