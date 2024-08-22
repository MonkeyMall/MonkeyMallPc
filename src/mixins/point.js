import router from "../router";

export function point() {
  let strStart;
  var start = new Date();
  router.afterEach((to, from, next) => {
    strStart =
      start.getFullYear() +
      "-" +
      (start.getMonth() + 1) +
      "-" +
      start.getDate() +
      " " +
      start.getHours() +
      ":" +
      start.getMinutes() +
      ":" +
      start.getSeconds();
    window.scrollTo(0, 0); // 逻辑操作
  });
  router.beforeEach((to, from, next) => {
    // console.log('页面刷新')
    sessionStorage.setItem('start', new Date().getTime())
    // 页面总高
    var totalH =
      document.body.scrollHeight || document.documentElement.scrollHeight;
    // // 可视高
    var clientH = window.innerHeight || document.documentElement.clientHeight;
    // // 滚动条卷去高度
    let scrollH = document.body.scrollTop || document.documentElement.scrollTop;
    // 百分比
    var result = "";
    if (scrollH === 0) {
      result = ((clientH / totalH) * 100).toFixed(2);
    } else {
      result = (((scrollH + clientH) / totalH) * 100).toFixed(2);
    }
    if (result > 100) {
      result = 100;
    }
    if (from.meta.title) {
      var end = new Date();
      var endStart =
        end.getFullYear() +
        "-" +
        (end.getMonth() + 1) +
        "-" +
        end.getDate() +
        " " +
        end.getHours() +
        ":" +
        end.getMinutes() +
        ":" +
        end.getSeconds();
      let Minutes =
        Math.floor(end.getTime() - start.getTime());
      start = new Date();
      let param = {
        pagename: from.meta.title || "-",
        pageType_var: from.meta.type || "-",
        offTime_var: endStart || "-",
        onTime_var: strStart || "-",
        browseTime: Minutes,
        viewProprotion_var: result / 100 || "-"
      };
    }
    next();
  });
}
