<template>
  <div :class="['footer', ClientWidth ? 'mbFooter' : 'webFooter']">
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
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background: white;
  height: auto;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  &.webFooter {
    height: 100vh;
    background: #1b1b1b;
    position: relative;
    .footer-box {
      position: relative;
      .pc {
        position: absolute;
        bottom: 0;
      }
    }
  }
}
</style>
