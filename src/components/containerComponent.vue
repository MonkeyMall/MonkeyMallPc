<template>
  <div :class="['container-component', swi ? 'swi' : '']">
    <Header v-if="isHeader" />
    <div :class="[platform === 'pc' ? 'main-pc' : 'main-mb']">
      <slot name="main"></slot>
    </div>
    <FixedWindow v-if="!isMobile() && isShow" />
    <Footer v-if="isFooter" /> 
  </div>
</template>

<script>
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import FixedWindow from "@/components/fixedWindow/index";
export default {
  name: "containerComponent",
  components: {
    Header,
    Footer,
    FixedWindow,
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
      default: true
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
    this.getVPage(pageName);
  },
  methods: {
    getVPage(name) {
      if (name === "login") {
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
  /* overflow-x: hidden; */
  background: #f5f6f9;
}
.main-mb {
  margin-top: 100px;
}
.container-component.swi{
  padding-top: 120px;
}
</style>
