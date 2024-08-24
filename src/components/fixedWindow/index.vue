<template>
  <div class="fixed-window" v-show="isShow">
    <div class="item special" @click="toTop" id="top">
      <div class="container">
        <img class="icon" src="@/static/imgs/top.png" alt="返回顶部" />
      </div>
    </div>
  </div>
</template>

<script>
import { onScroll } from "@/utils/deviceType";

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
      isShow: true,
    };
  },
  watch: {
    isShow: function(val, o) {
      // console.log('222', val, o)
      // const select = document.querySelectorAll(".special");
      // if (!val) {
      //   select[select.length - 1].className = "item special";
      //   select[select.length - 2].className = "item special last";
      // } else {
      //   select[select.length - 1].className = "item special last";
      //   select[select.length - 2].className = "item special";
      // }
      // $("#top").slideToggle();
    },
    topShow(v, o) {
      // console.log('111', v, o)
      // const select = document.querySelectorAll(".special");
      // if (v) {
      //   select[select.length - 1].className = "item special";
      //   select[select.length - 2].className = "item special last";
      // } else {
      //   select[select.length - 1].className = "item special last";
      //   select[select.length - 2].className = "item special";
      // }
      // $("#top").slideToggle();
    }
  },
  mounted() {
    window.addEventListener("scroll", function() {
      that.isShow = onScroll(200);
    });
  },
  methods: {
    toTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.fixed-window {
  width: 40px;
  height: 40px;
  position: fixed;
  z-index: 999;
  right: 50px;
  bottom: 100px;
  .icon {
    width: 100%;
    height: 100%;
  }
}
</style>
