<template>
  <div class="about">
    <h1>This is an about page <span>111</span></h1>
    <div @click="goAbout1">点击跳转</div>
  </div>
</template>
<script>
export default {
  name: "About",
  components: {
  },
  data() {
    return {
      
    };
  },
  created() {
  },
  mounted() {},
  computed: {},
  methods: {
    goAbout1() {
      this.$router.push({
        name: "About1"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  color: #333;
  span {
    color: green;
  }
}
</style>
