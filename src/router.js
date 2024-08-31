import Vue from "vue";
import Router from "vue-router";

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
      component: () => import("./views/Home/Home.vue"),
      meta: {
        name: 'home',
        title: "首页",
        type: "搜索公司，入职闭坑",
        headline: "猿猴社区",
        keywords: "搜索公司，入职闭坑",
        description:
          "搜索公司，入职闭坑",
        toolbartext: ["首页"]
      }
    },
    {
      path: "/componyInfo",
      name: "componyInfo",
      component: () => import("./views/Compony/Index.vue"),
      meta: {
        name: 'home',
        title: "公司详情",
        type: "公司详情，搜索公司，入职闭坑",
        headline: "公司详情-猿猴社区",
        keywords: "公司详情，搜索公司，入职闭坑",
        description: "公司详情，搜索公司，入职闭坑",
        toolbartext: ["首页", "公司详情"]
      }
    },
    {
      path: "/ridicule",
      name: "ridicule",
      component: () => import("./views/ridicule/Index.vue"),
      meta: {
        name: 'ridicule',
        title: "侃言",
        type: "社区，调侃，社会现状，失业人员",
        headline: "侃言-猿猴社区",
        keywords: "社区，调侃，社会现状，失业人员",
        description:
          "搜索公司，入职闭坑",
        toolbartext: ["侃言"]
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
        headline: "关于我们-猿猴社区",
        keywords: "社区，调侃，社会现状，失业人员",
        description:
          "搜索公司，入职闭坑",
        toolbartext: ["关于我们"]
      }
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("./views/Mine/Index.vue"),
      meta: {
        name: 'mine',
        title: "个人中心",
        type: "公司详情，搜索公司，入职闭坑",
        headline: "个人中心-猿猴社区",
        keywords: "公司详情，搜索公司，入职闭坑",
        description: "公司详情，搜索公司，入职闭坑",
        toolbartext: ["个人中心"]
      }
    },
    {
      path: "/myRidicule",
      name: "myRidicule",
      component: () => import("./views/Mine/MyRidicule.vue"),
      meta: {
        name: 'mine',
        title: "我的调侃",
        type: "公司详情，搜索公司，入职闭坑",
        headline: "我的调侃-猿猴社区",
        keywords: "公司详情，搜索公司，入职闭坑",
        description: "公司详情，搜索公司，入职闭坑",
        toolbartext: ["个人中心", "我的调侃"]
      }
    },
    {
      path: "/myCollentPcRidicule",
      name: "myCollentPcRidicule",
      component: () => import("./views/Mine/CollentRidicule.vue"),
      meta: {
        name: 'mine',
        title: "我收藏的调侃",
        type: "公司详情，搜索公司，入职闭坑",
        headline: "收藏调侃-猿猴社区",
        keywords: "公司详情，搜索公司，入职闭坑",
        description: "公司详情，搜索公司，入职闭坑",
        toolbartext: ["个人中心", "我的调侃"]
      }
    },
    {
      path: "/addCompany",
      name: "addCompany",
      component: () => import("./views/Mine/AddCompony.vue"),
      meta: {
        name: 'addCompany',
        title: "创建公司",
        type: "公司详情，搜索公司，入职闭坑",
        headline: "创建公司-猿猴社区",
        keywords: "公司详情，搜索公司，入职闭坑",
        description: "公司详情，搜索公司，入职闭坑",
        toolbartext: ["个人中心", "创建公司"]
      }
    },
    {
      path: "/addRidicule",
      name: "addRidicule",
      component: () => import("./views/Mine/AddRidicule.vue"),
      meta: {
        name: 'addRidicule',
        title: "创建调侃",
        type: "公司详情，搜索公司，入职闭坑",
        headline: "创建调侃-猿猴社区",
        keywords: "公司详情，搜索公司，入职闭坑",
        description: "公司详情，搜索公司，入职闭坑",
        toolbartext: ["个人中心", "创建调侃"]
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
        headline: "登录-猿猴社区",
        keywords: "登录，社区，调侃，社会现状，失业人员",
        description:
          "登录，社区，调侃，社会现状，失业人员，搜索公司，入职闭坑"
      }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/register/Index.vue"),
      meta: {
        name: 'register',
        title: "注册",
        type: "登录，社区，调侃，社会现状，失业人员",
        headline: "注册-猿猴社区",
        keywords: "登录，社区，调侃，社会现状，失业人员",
        description:
          "登录，社区，调侃，社会现状，失业人员，搜索公司，入职闭坑"
      }
    },
  ]
});
router.beforeEach(async (to, from, next) => {
  console.log('刷新执行', to, from)
  // if (to.name !== "login") {
  //   store.dispatch("get_user_info");
  // }
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
