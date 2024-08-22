import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";

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
        title: "首页",
        type: "品牌宣传",
        headline: "小宋模板官网",
        keywords: "小宋, 小宋模板,小宋模板官网,智能汽车",
        description:
          "小宋模板科技集团（WM Motor）成立于2015年，公司名字取自德语世界冠军（Weltmeister）。作为扎根于中国的硬科技创新代表，小宋模板自创立之初便制定了明确的集团发展“三步走”战略。小宋模板始终秉持”科技普惠“的初心，以“用得爽、用得起”的产品和服务，让每个中国家庭都拥有属于自己的新能源智能出行生活。"
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/about1",
      name: "about1",
      component: () => import("./views/About1.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
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
