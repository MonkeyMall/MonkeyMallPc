import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import IconSvg from "@/components/iconComponent";
import "@/utils/flexible";
import common from "@/utils/index";
import "animate.css";
// import moment from "moment";
import "moment/locale/zh-cn";
import "@/assets/scss/utils.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import animated from "animate.css";
// import VueAweSomeSwiper from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import "@/utils/directives";
import VueLazyload from "vue-lazyload";
import Mixin from "@/mixins/language";
import { point } from "@/mixins/point";
import Resource from "@/config/resource";
import vueMiniPlayer from "vue-mini-player";
import "vue-mini-player/lib/vue-mini-player.css";
Vue.use(vueMiniPlayer);
// 判断设备类型
import isMobile from "@/utils/deviceType";
import i18n from "./lang";

Vue.use(common);
Vue.config.productionTip = false;
Vue.component("icon-svg", IconSvg);
Vue.mixin(Mixin);
// Vue.mixin(gioPoint);
// Vue.use(VueAweSomeSwiper);
Vue.use(animated);
Vue.use(ElementUI);
Vue.use(VueLazyload, {
  preLoad: 1 /* 预加载高度比例*/,
  error: require("./static/lazy_load.svg"),
  loading: require("./static/lazy_load.svg"),
  attempt: 1 /* 尝试加载图片数量*/
});
Vue.prototype.isMobileDevice = isMobile;
Vue.prototype.Resource = Resource.Resource;
point();
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
}).$mount("#app");
