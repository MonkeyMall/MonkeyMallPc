<template>
  <div>
    <div class="mbIndex">
      <p class="index-title">- 猿猴宝宝社区 -</p>
      <div class="mbItem">
        <p class="title">微信小程序</p>
        <p class="des">打开微信扫码体验</p>
        <div class="qr-code">
          <img src="@/static/imgs/wechat.jpg" alt="">
        </div>
      </div>
      <div class="mbItem">
        <p class="title">电脑端查看</p>
        <p class="des">https://www.monkeysmall.com/</p>
        <div @click="copyFn">复制链接</div>
      </div>
      <div class="mbItem">
        <p class="title" @click="goAboutUs">关于我们</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MbIndex",
  data() {
    return {
      
    };
  },
  methods: {
    async copyFn() {
      const textToCopy = "https://www.monkeysmall.com";
      await navigator.clipboard.writeText(textToCopy);
      this.$message({
        message: "复制成功",
        type: "success",
      })
    },
    goAboutUs() {
      this.$router.push({ name: "about" })
    }
  },
};
</script>

<style lang="scss" scoped>
.mbIndex {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  .index-title {
    font-size: 40px;
    font-weight: 600;
    color: #333;
  }
  .mbItem {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 32px;
      font-weight: 600;
      color: #333;
    }
    .des {
      font-size: 26px;
      color: #666;
      margin: 10px 0;
    }
    .qr-code {
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
