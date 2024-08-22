<template>
  <div
    :class="[`vehicles-container-${platform}`]"
    @mouseenter="onMouseInter()"
    @mouseleave="onMouseLeave()"
    @click="vehicleType(vehiclesData)"
  >
    <div class="test">
      <p :class="[`name-${platform}`]">
        <img :src="name" alt="" />
      </p>
      <div :class="[`desc-${platform}`]">
        {{ vehiclesData.desc[0] }}
      </div>
      <div :class="[`comprehensive-${platform}`]">
        {{ $t("homePage.comprehensive") }}
      </div>
      <div :class="[`price-${platform}`]">
        {{ vehiclesData.desc[1] }}
      </div>
      <div :class="[`circle-${platform}`]"></div>
    </div>
    <img
      :class="[`model-${platform}`, { modelW6: vehiclesData.url === '/W6' }]"
      v-lazy="vehiclesData.img"
      alt=""
    />
    <img class="hoverBg" :src="vehiclesData.bg" alt="" />
    <div :class="[`video-container-${platform}`]">
      <!-- <video
        muted
        @mouseenter="onMouseInter(vehiclesData.ref)"
        @mouseleave="onMouseLeave"
        controls
        :ref="vehiclesData.ref"
        :class="[`video-container-video-${platform}`]"
        width="100%"
        height="100%"
      >
        <source :src="vehiclesData.video" />
        您的浏览器不支持video标签
      </video> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    platform: {
      /* 平台类别，移动端传mb,pc端传pc*/
      type: String,
      require: true
    },
    vehiclesData: {
      /* 车型参数，可传递数组, 结构如下*/
      // [
      //     {
      //       name: "W6",
      //       desc: ["超算力可进化智能纯电SUV", "￥16.98万起"],
      //       img: require("@/static/W6.png"),
      //       video: require("@/static/a.mp4"),
      //       poster: "",
      //       url: "/w6"
      //      }
      // ]
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      name: this.vehiclesData.name
    };
  },
  mounted() {
    this.video = this.$refs[this.vehiclesData.ref];
  },
  methods: {
    onMouseInter() {
      this.name = this.vehiclesData.hoverName;
      // let video = this.$refs[this.vehiclesData.ref];
      // video.play();
    },
    onMouseLeave() {
      this.name = this.vehiclesData.name;
      // let video = this.$refs[this.vehiclesData.ref];
      // video.pause();
    },
    vehicleType(event) {
      this.$router.push({
        path: event.url
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.vehicles-container-pc {
  width: 750px;
  height: 750px;
  margin-bottom: 38px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  color: #333333;
  overflow: hidden;
  .name-pc {
    height: 55px;
    margin-top: 38px;
    margin-left: 52px;
    img {
      height: 100%;
    }
  }
  .desc-pc {
    margin-top: 22px;
    margin-left: 52px;
    font-size: 20px;
    text-align: left;
    line-height: 26px;
    font-size: 26px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #505050;
  }
  .comprehensive-pc {
    font-size: 24px;
    margin-left: 52px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #505050;
    line-height: 24px;
    margin-top: 36px;
  }
  .price-pc {
    font-size: 24px;
    font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #505050;
    line-height: 24px;
    margin-top: 10px;
    margin-left: 52px;
  }
  .circle-pc {
    width: 634px;
    height: 634px;
    opacity: 0.09;
    position: absolute;
    z-index: 2;
    top: 384px;
    left: 173px;
    border-radius: 50%;
  }
  .model-pc {
    width: 637px;
    position: absolute;
    bottom: 167px;
  }
  .modelW6 {
    width: 520px;
    padding-left: 80px;
  }
  &:hover .model-pc {
    display: none;
  }
  &:hover .video-container-pc {
    width: 750px;
    height: 750px;
    //visibility: visible;
    opacity: 1;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background: rgba(124, 124, 124, 0.5);
    transform: scale(1);
    transition: 1s;
  }
  .hoverBg {
    display: none;
  }
  &:hover .hoverBg {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    transition: 1s;
  }
  &:hover .test {
    position: absolute;
    z-index: 4;
    .desc-pc {
      color: #ffffff;
    }
    .comprehensive-pc {
      color: #ffffff;
    }
    .price-pc {
      color: #ffffff;
    }
    transition: 1s;
  }
  .video-container-pc {
    width: 706px;
    height: 791px;
    //visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background: rgba(124, 124, 124, 0.5);
    transition: 0.5s;
    transform: scale(2);
    .name-pc {
      font-size: 50px;
      line-height: 69px;
      color: #ffffff;
      position: absolute;
      top: 319px;
      left: 50%;
      transform: translateX(-50%);
    }
    .desc-pc {
      font-size: 20px;
      line-height: 27px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 400px;
      color: #ffffff;
      opacity: 0.5;
    }
    &-video-pc {
      width: 100%;
      object-fit: cover;
    }
  }
}

.vehicles-container-mb {
  width: 686px;
  height: 534px;
  background: white;
  position: relative;
  z-index: 1;
  cursor: pointer;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  color: #333333;
  overflow: hidden;
  margin-top: 34px; /* 移动端*/
  .dot-mb {
    width: 17px;
    height: 17px;
    background: #31bfa0;
    position: absolute;
    z-index: 2;
    top: 46px;
    left: 54px;
  }
  .name-mb {
    height: 50px;
    line-height: 50px;
    font-size: 50px;
    position: absolute;
    z-index: 2;
    top: 82px;
    left: 48px;
  }
  .desc-mb {
    position: absolute;
    z-index: 2;
    top: 156px;
    left: 48px;
    font-size: 20px;
    text-align: left;
    line-height: 34px;
  }
  .circle-mb {
    width: 634px;
    height: 634px;
    background: rgba(49, 191, 160, 0.7);
    opacity: 0.09;
    position: absolute;
    z-index: 2;
    top: 92px;
    left: 188px;
    border-radius: 50%;
  }
  .model-mb {
    width: 556px;
    height: auto;
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
  }
  &:hover .video-container-mb {
    width: 686px;
    height: 534px;
    opacity: 1;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background: rgba(124, 124, 124, 0.5);
    transform: scale(1);
  }
  .video-container-mb {
    width: 686px;
    height: 534px;
    opacity: 0;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    background: rgba(124, 124, 124, 0.5);
    transition: 0.3s;
    transform: scale(2);
    .name-mb {
      font-size: 50px;
      line-height: 69px;
      color: #ffffff;
      position: absolute;
      top: 216px;
      left: 50%;
      transform: translateX(-50%);
    }
    .desc-mb {
      font-size: 20px;
      line-height: 27px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 282px;
      color: #ffffff;
      opacity: 0.5;
    }
    &-video-mb {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
