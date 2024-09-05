<template>
  <div class="PC-footer-box">
    <div class="footer-box-left">
      <div class="qr-code">
        <img src="@/static/imgs/logo.png" alt="">
      </div>
      <div class="ss">
        <p class="wec wec1">猿猴宝宝社区</p>
        <p class="des des1">摸鱼跌侃之家</p>
        <p class="des des1">一起来调侃</p>
      </div>
    </div>
    <div class="footer-box-left">
      <div class="qr-code">
        <img src="@/static/imgs/wechat.jpg" alt="">
      </div>
      <div>
        <p class="wec">微信小程序</p>
        <p class="des">打开微信扫码体验</p>
      </div>
    </div>
    <div class="footer-box-left">
      <div>
        <p class="wec">客服：小宋</p>
        <p class="wec">头条号：北漂程序员回山西</p>
        <p class="wec">联系方式：598349146@qq.com</p>
        <p class="des des2 des3">版权所有 © all rights reserved</p>
        <p class="des des2">晋ICP备2024043727号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "webMenu",
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  created() {},
  watch: {},
  mounted() {},
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.PC-footer-box {
  position: relative;
  display: flex;
  width: 1200px;
  margin: 0 auto;
  .footer-box-left {
    flex: 1;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .ss {
      display: flex;
      flex-direction: column;
    }
    .wec {
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      line-height: 23px;
      &.wec1 {
        color: #00baad;
        margin-bottom: 0;
      }
    }
    .des {
      margin-top: 15px;
      color: #ffffff;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 20px;
      &.des1 {
        color: #999;
        margin-bottom: 0;
      }
      &.des2 {
        color: #999;
        margin-top: 0;
        margin-bottom: 0;
      }
      &.des3 {
        color: #999;
        margin-top: 20px;
      }
    }
    .qr-code {
      width: 120px;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

