<template>
  <div>
    <div class="empty" :style="style">
      <img src="@static/imgs/empty.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Empty",
  props: {
    text: {
      type: String,
      default: "暂无数据"
    },
    style: {
      type: Object,
      default: () => {
        return {
          width: "1200px",
          minHeight: "600px"
        };
      }
    }
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
