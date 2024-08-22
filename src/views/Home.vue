<template>
  <div class="home">首页</div>
</template>

<script>
import Vue from "vue";

export default {
  name: "home",
  data() {
    return { num: 0 };
  },
  mounted() {
    console.log("设备类型", this.isMobileDevice);
  },
  methods: {
    add() {
      this.num = this.num + 1;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  //background: green;
}
</style>
