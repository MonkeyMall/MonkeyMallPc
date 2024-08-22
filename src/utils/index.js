export default {
  install(Vue) {
    Vue.prototype.isMobile = function() {
      return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    };
    Vue.prototype.setLanguage = function(value = "zh") {
      this.$router.push({
        query: {...Object.assign(this.$route.query, {'lang': value}), time: new Date().getTime()}
      })
      localStorage.setItem("language", value);
      setTimeout(() => {
        this.$router.go(0);
        window.scrollTo(0,0) /* 切换语言刷新页面使其回到顶部*/
      }, 10)
    };
  }
};

export function scrollTop(val) {
  let speed = val || 5;
  (function smoothscroll() {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo(0, currentScroll - currentScroll / speed);
    }
  })();
}
export function getUrlKey(name, url) {
  return (
    decodeURIComponent(
      (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(url) || [
        ,
        ""
      ])[1].replace(/\+/g, "%20")
    ) || null
  );
}
export function replaceParamVal(paramName,replaceWith) {
  var oUrl = this.location.href.toString();
  var re=eval('/('+ paramName+'=)([^&]*)/gi');
  var nUrl = oUrl.replace(re,paramName+'='+replaceWith);
  this.location = nUrl;
  window.location.href=nUrl
}

// 时间戳转指定格式日期
export function transferTime(time, format='yyyy-mm-dd') {
  if(!(/^\d+$/.test(time))) {
    return '请传入正确的时间戳格式'
  }
  if(/[abcefgjklnopqrtuvwxz]/gi.test(format)){
    return '请输入正确的转换格式'
  }
  const date = time ? new Date(Number(time)) : new Date();
  const transform = (i) => {return i < 10 ? `0${i}` : i}
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const time_result = format.replace(/(yy){1,2}|m{1,2}|d{1,2}|h{1,2}|i{1,2}|s{1,2}/gi, (item) => {
    switch (item.toUpperCase()) {
      case 'YY':
        return String(year).substr(2,2);
      case 'YYYY':
        return year;
      case 'M':
        return month;
      case 'MM':
        return transform(month);
      case 'D':
        return day;
      case 'DD':
        return transform(day);
      case 'H':
        return hour;
      case 'HH':
        return transform(hour);
      case 'I':
        return min;
      case 'II':
        return transform(min)
      case 'S':
        return sec;
      case 'SS':
        return transform(sec);
    }
  })
  return time_result
}