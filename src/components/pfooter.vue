<template>
  <div class="phone_Conter">
    <div class="flexBat">
      <div class="phone_itemCat"></div>
      <div class="phone_itemCat"></div>
      <div class="phone_itemCat"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pfooter",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scope>
.phone_Conter {
  position: fixed;
  right: 22px;
  bottom: 10px;
  z-index: 130;

  .flexBat {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .phone_itemCat {
    flex: 1;
    height: 92px;
    img {
      width: 92px;
      height: 92px;
    }
  }
  .lintop {
    height: 2px;
    border: 2px solid #d8d8d8;
  }
}
</style>
