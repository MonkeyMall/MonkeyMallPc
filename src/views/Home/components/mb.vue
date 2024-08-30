<template>
  <div class="phone_home">
    <mbIndex />
  </div>
</template>

<script>
import mbIndex from "@/components/mb/index.vue";
export default {
  name: "phone_home",
  components: { mbIndex }
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
