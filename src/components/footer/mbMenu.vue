<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: "mbMenu",
  components: {
    top
  },
  data() {
    return {
      topFlag: false
    };
  },
  computed: {
    
  },
  created() {},
  watch: {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop >= 300) {
        this.topFlag = true;
      } else {
        this.topFlag = false;
      }
    },
    goHome() {
      this.$router.push({
        path: "/"
      });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.mb {
  width: 100vw;
  height: 600px;
  background: #000000;
  overflow: hidden;
  .logo {
    margin-top: 164px;
    margin-bottom: 122px;
    img {
      width: 254px;
    }
  }
  .Copyright {
    font-size: 17px;
    font-family: Helvetica;
    color: #383838;
  }
  .icp {
    font-size: 17px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 24px;
    margin-top: 24px;
    a{
      color: #383838;
      text-decoration: none;
    }
  }
}

.wxtip {
  background: rgba(0, 0, 0, 0.8);
  text-align: right;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  display: none;
}
</style>
