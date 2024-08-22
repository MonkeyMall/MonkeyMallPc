<template>
  <div class="topConter">
    <div class="flexBat">
      <div class="phone_itemCat">
        <img
          src="https://cos-data.wm-imotor.com/website/headsetM.png"
          @click.stop="onClickItem"
        />
      </div>
      <div class="phone_itemCat">
        <img
          @click.stop="phoneClick('4006-999-666')"
          src="https://cos-data.wm-imotor.com/website/phoneM.png"
        />
      </div>
      <div class="phone_itemCat">
        <img
          @click.stop="scrollTop"
          src="https://cos-data.wm-imotor.com/website/topM.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { scrollTop } from "@/utils/index";
export default {
  name: "phone_home",
  data() {
    return {};
  },
  props: {
    pageType: {
      type: String,
      default: "noVehicle"
    }
  },
  methods: {
    scrollTop() {
      if (this.pageType === "vehicle") {
        this.$parent.topFn();
      } else {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        // 可以不传,值越大,越慢
        // scrollTop(200);
      }
    },
    phoneClick(val) {
      window.location.href = `tel://${val}`;
    },
    onClickItem() {
      this.$router.push({
        path: "/consuService"
      });
    }
  }
};
</script>

<style lang="scss">
.topConter {
  position: fixed;
  right: 22px;
  bottom: 90px;
  z-index: 130;

  .flexBat {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .phone_itemCat {
    flex: 1;
    height: 70px;
    margin-bottom: 27px;
    img {
      width: 70px;
      height: 70px;
    }
  }
  .lintop {
    height: 2px;
    border: 2px solid #d8d8d8;
  }
}
</style>
