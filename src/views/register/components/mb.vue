<template>
  <div class="phone_home">
    <p class="text">测试字体</p>
    <p class="PC-text">测试字体</p>
    <div class="blo"></div>
  </div>
</template>

<script>
export default {
  name: "phone_home",
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.text {
  font-size: 32px;
  line-height: 100%;
}
.PC-text {
  font-size: 32px;
  line-height: 100%;
}
.blo {
  width: 750px;
  height: 200px;
  background: red;
}
</style>
