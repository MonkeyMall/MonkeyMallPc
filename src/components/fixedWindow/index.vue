<template>
  <div class="fixed-window">
    <div
      :class="['item special', index === 3 ? 'last' : '']"
      v-for="(item, index) in list"
      :key="index"
      @mouseleave="onMouse(index, 'out')"
      @mouseenter="onMouse(index, 'in')"
      @click="onClickItem(index, item)"
    >
      <div class="iconContainer">
        <img :src="item.icon" :alt="item.name" class="icon" data-test="test" />
      </div>
      <!-- <div class="name">{{ item.name }}</div> -->
      <div class="dia" v-if="item.dia && serviceOnline">
        <div class="container">
          <img :src="qrcode" alt="即刻扫码，获取专属客服">
          <p class="diaText">即刻扫码</p>
          <p class="diaText">获取专属客服</p>
        </div>
      </div>
      <div
        :class="['diaCall', lang === 'en' ? 'en' : '']"
        v-if="item.dia && callOnline"
      >
        4006-999-666
      </div>
    </div>
    <div class="item special" @click="toTop" id="top">
      <div class="container">
        <img class="icon" :src="up" alt="返回顶部" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { onScroll } from "@/utils/deviceType";
import $ from "jquery";
import Resource from "@/config/resource";

export default {
  name: "FixedWindow",
  props: {
    pageType: {
      type: String,
      default: "other"
    },
    topShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      list: this.$t("fixedWindow"),
      up: `${Resource.Resource}up.png`,
      qrcode: `${Resource.Resource}service_online.jpg`,
      serviceOnline: false,
      callOnline: false
    };
  },
  watch: {
    isShow: function(val, o) {
      console.log('222', val, o)
      const select = document.querySelectorAll(".special");
      if (!val) {
        select[select.length - 1].className = "item special";
        select[select.length - 2].className = "item special last";
      } else {
        select[select.length - 1].className = "item special last";
        select[select.length - 2].className = "item special";
      }
      $("#top").slideToggle();
    },
    topShow(v, o) {
      console.log('111', v, o)
      // if (!v) {
      //   this.isShow = true;
      // } else {
      //   this.isShow = false;
      // }
      const select = document.querySelectorAll(".special");
      if (v) {
        select[select.length - 1].className = "item special";
        select[select.length - 2].className = "item special last";
      } else {
        select[select.length - 1].className = "item special last";
        select[select.length - 2].className = "item special";
      }
      $("#top").slideToggle();
    }
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", function() {
      that.isShow = onScroll(1080);
    });
    const select = document.querySelectorAll(".special");
    select[select.length - 2].className = "item special last";
  },
  methods: {
    ...mapMutations(["UPDATE_CUSTOMER_SERVICE"]),
    onMouse(index, type) {
      console.log(123, this.lang, index, type)
      if (this.lang !== "en" && index === 0 && type === "in") {
        this.serviceOnline = true;
      }
      if (this.lang !== "en" && index === 0 && type === "out") {
        this.serviceOnline = false;
      }
      if (index === 2 && type === "in") {
        this.callOnline = true;
      }
      if (index === 2 && type === "out") {
        this.callOnline = false;
      }
      if (this.lang === "en" && index === 0 && type === "in") {
        this.callOnline = true;
      }
      if (this.lang === "en" && index === 0 && type === "out") {
        this.callOnline = false;
      }
    },
    onClickItem(index) {
      if (index === 1) {
        this.UPDATE_CUSTOMER_SERVICE({
          customerService: true
        }); /* 在线客服弹窗，全局VUEX控制*/
      }
      if (index === 3) {
        if (this.$route.name === "EX-5") {
          this.$router.push({
            path: `/FinancialCalculator?index=1`
          });
        } else {
          this.$router.push({
            path: `/FinancialCalculator`
          });
        }
      }
    },
    toTop() {
      if (this.pageType === "vehicle") {
        this.$parent.topFn();
      } else {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fixed-window {
  width: 60px;
  position: fixed;
  z-index: 99999999;
  right: 12px;
  bottom: 120px;
  background-color: rgba(242, 242, 247, 0.62);
  padding: 0 10px;
  border-radius: 6px;
  .item {
    &:last-of-type {
      &::before {
        content: "";
        width: 0;
        height: 0;
      }
    }
    @media screen and (min-width: 1024px) {
      width: 100%;
      height: 70px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      height: 100px;
    }
    position: relative;
    cursor: pointer;
    &::before {
      content: "";
      width: 50px;
      height: 1px;
      background: #C7C7CC;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &:last-child {
      @include center;
      &::before {
        content: "";
        width: 0;
        height: 0;
      }
    }
    .icon {
      // margin-top: 14px;
      width: 60px;
      height: auto !important;
    }
    .name {
      margin-top: 12px;
      font-size: 12px;
      font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      font-weight: normal;
      color: #080808;
      line-height: 17px;
    }
    .iconContainer {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .dia {
      position: absolute;
      border-radius: 2px;
      top: -42px;
      width: 120px;
      height: 147px;
      left: -148px;
      z-index: 10000000;
      background: rgba(#F2F2F7, 0.62);
      border-radius: 8px;
      .container {
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        padding-top: 5px;
        // background-color: #ffffff;
        // background-image: url("https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/league/scan.png");
        // background-size: contain;
        background-size: cover;
        text-align: center;
        img{
          width: 80%;
        }
        .diaText {
          font-size: 12px;
          font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
          color: #4C4C4C;
          line-height: 16px;
        }
        // &::after{
        //   position: absolute;
        //   content: "";
        //   top: 50%;
        //   right: -10px;
        //   border-top: solid 5px transparent;
        //   border-right: solid 5px transparent;
        //   border-bottom: solid 5px transparent;
        //   border-left: solid 5px white;
        //   opacity: 0.62;
        // }
      }
    }
    .diaCall {
      width: 120px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: rgba(#F2F2F7, 0.62);
      border-radius: 8px;
      // opacity: 0.62;
      position: absolute;
      top: 158px;
      left: -148px;
      z-index: 10000000;
      font-size: 12px;
      font-family: AlibabaPuHuiTiL, AlibabaPuHuiTiR;
      color: #4C4C4C;
      &.en{
        top: 20px;
      }
      // &::after {
      //   position: absolute;
      //   content: "";
      //   top: 10px;
      //   right: -10px;
      //   border-top: solid 5px transparent;
      //   border-right: solid 5px transparent;
      //   border-bottom: solid 5px transparent;
      //   border-left: solid 5px #F2F2F7;
      //   opacity: 0.62;
      // }
    }
  }
  .last::before {
    content: "";
    width: 0;
    height: 0;
    background-color: transparent;
  }
  #top {
    display: none;
    text-align: center;
    @media screen and (min-width: 1024px) {
      line-height: 70px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      line-height: 100px;
    }
  }
}
</style>
