<template>
  <div class="header">
    <template v-if="ClientWidth">
      <MbMenu></MbMenu>
    </template>
    <template v-else>
      <WebMenu></WebMenu>
    </template>
  </div>
</template>
<script>
import WebMenu from "./webMenu";
import MbMenu from "./mbMenu";
export default {
  name: "Header",
  components: {
    WebMenu,
    MbMenu
  },
  data() {
    return{
      isPortrait: true,
      angle: 0
    }
  },
  created() {
    // if(window.innerHeight >= window.innerWidth) {
    //   this.isPortrait = window.innerHeight >= window.innerWidth ? true : false
    // }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: white;
  height: auto;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
}
</style>
