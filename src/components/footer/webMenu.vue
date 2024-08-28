<template>
  <div class="footer-box">
    <div class="footer-box-left">
      <div class="qr-code">
        <img src="@/static/imgs/logo.png" alt="">
      </div>
      <div class="ss">
        <p class="wec wec1">猿猴宝宝社区</p>
        <p class="des des1">共享找工作</p>
        <p class="des des1">起来调侃</p>
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
.footer {
  background: white;
  height: auto;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  .footer-box-left {
    width: 500px;
    height: 200px;
    display: flex;
    align-items: center;
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
      margin-top: 20px;
      margin-bottom: 24px;
      color: #ffffff;
      font-size: 14px;
      line-height: 16px;
      &.des1 {
        color: #999;
        margin-bottom: 0;
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

