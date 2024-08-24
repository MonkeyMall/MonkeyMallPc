import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import Ridicule from "./views/ridicule/Index.vue";
import store from "./store";

Vue.use(Router);
/*const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}*/

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        name: 'home',
        title: "首页",
        type: "搜索公司，入职闭坑",
        headline: "猿猴社区",
        keywords: "搜索公司，入职闭坑",
        description:
          "搜索公司，入职闭坑"
      }
    },
    {
      path: "/ridicule",
      name: "ridicule",
      component: Ridicule,
      meta: {
        name: 'ridicule',
        title: "侃言",
        type: "社区，调侃，社会现状，失业人员",
        headline: "猿猴社区",
        keywords: "社区，调侃，社会现状，失业人员",
        description:
          "搜索公司，入职闭坑"
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About/Index.vue"),
      meta: {
        name: 'about',
        title: "关于我们",
        type: "社区，调侃，社会现状，失业人员",
        headline: "猿猴社区",
        keywords: "社区，调侃，社会现状，失业人员",
        description:
          "搜索公司，入职闭坑"
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login/Index.vue"),
      meta: {
        name: 'login',
        title: "登录",
        type: "登录，社区，调侃，社会现状，失业人员",
        headline: "猿猴社区",
        keywords: "登录，社区，调侃，社会现状，失业人员",
        description:
          "登录，社区，调侃，社会现状，失业人员，搜索公司，入职闭坑"
      }
    },
  ]
});
router.beforeEach(async (to, from, next) => {
  console.log('刷新执行')
  store.dispatch("get_user_info");
  const oldKeywords = document.getElementsByName("keywords").item(0);
  if (oldKeywords) {
    oldKeywords.remove();
  }
  const oldDescription = document.getElementsByName("description").item(0);
  if (oldDescription) {
    oldDescription.remove();
  }
  if (to.meta.description) {
    let head = document.getElementsByTagName("head");
    let meta0 = document.createElement("meta");
    meta0.name = "keywords";
    meta0.content = to.meta.keywords;
    head[0].appendChild(meta0);
    let meta1 = document.createElement("meta");
    meta1.name = "description";
    meta1.content = to.meta.description;
    head[0].appendChild(meta1);
  }
  if (to.meta.headline) {
    document.title = to.meta.headline;
  }
  next();
});
export default router;
