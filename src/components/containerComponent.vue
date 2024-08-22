<template>
  <div :class="['container-component', swi ? 'swi' : '']">
    <Header v-if="isHeader" />
    <div :class="[platform === 'pc' ? 'main-pc' : 'main-mb']">
      <slot name="main"></slot>
    </div>
    <!-- <Footer v-if="isFooter" />
    <FixedWindow v-if="!isMobile() && isShow" />
    <IframeContainer/>  -->
  </div>
</template>

<script>
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import FixedWindow from "@/components/fixedWindow/index";
import IframeContainer from "@/components/IframeContainer";
import { onScroll } from "@/utils/deviceType";
export default {
  name: "containerComponent",
  components: {
    Header,
    Footer,
    FixedWindow,
    IframeContainer
  },
  props: {
    isHeader: {
      type: Boolean,
      default: true
    },
    isFooter: {
      type: Boolean,
      default: true
    },
    swi: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: true
    };
  },
  computed: {
    platform: function() {
      return this.isMobile() ? "mb" : "pc";
    }
  },
  mounted() {
    var pageName = this.$route.name || "";
    console.log("PageNama", pageName);
    this.getVPage(pageName);
    // this.getVPage("W6");
    // const that = this;
    // window.addEventListener("scroll", function() {
    //   that.isShow = onScroll(0);
    // });
  },
  methods: {
    getVPage(name) {
      if (name === "W6" || name === "EX-5" || name === "E.5") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>

<style scoped>
.main-pc {
  overflow-x: hidden;
}
.main-mb {
  margin-top: 100px;
}
/* .container-component.swi{
  height: 100vh;
  overflow: hidden;
} */
</style>
