<template>
  <div class="layout">
    <div v-if="showHeader" class="layout__head">
      <slot name="header" />
    </div>
    <div class="layout__body">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonLayout',
  props: {
    // 是否显示header部分
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      key: 'value'
    }
  }
}
</script>

<style lang='scss' scoped>
  //modify by limingang
  .layout {
    background: #f0f3f5;
    height: 100%;
    &__head {
      padding: 20px;
      padding-bottom: 0;
      background: #fff;
    }
    &__body {
      background: #fff;
      margin: 20px;
      padding: 20px;
      min-height: 400px;
    }
  }
</style>

