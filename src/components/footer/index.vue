<template>
  <div :class="['footer', ClientWidth ? 'mbFooter' : 'webFooter', footerFixed ? 'footer-fixed' : '']">
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
  name: "Footer",
  components: {
    WebMenu,
    MbMenu
  },
  props: {
    
  },
  watch: {
    footerFixed(val) {

      // this.footerFixed = val;
    }
  },
  created() {
    console.log('路由信息：', this.$route);
    if (this.$route.meta.name == 'mine') {
      this.footerFixed = true
    }
  },
  data() {
    return {
      footerFixed: false
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background: white;
  height: auto;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  margin-top: 40px;
  &.webFooter {
    width: 100%;
    background: #1b1b1b;
    position: relative;
    &.footer-fixed {
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
