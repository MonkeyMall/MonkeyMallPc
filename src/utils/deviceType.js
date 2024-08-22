const ua = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(ua);
export default isMobile;

export function checkIsMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}

export function onScroll(top) {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  return scrollTop > top ? true : false;
}

export function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = [...arguments];
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}
export function throttle(func, wait) {
  let previous = 0;
  return function() {
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}
