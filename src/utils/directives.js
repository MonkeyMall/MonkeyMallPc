import Vue from "vue";
// 防抖
Vue.directive("debounce", {
  inserted: function(el, binding) {
    let timer;
    el.addEventListener("click", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 2000);
    });
  }
});

// 拖拽
Vue.directive("draggable", {
  inserted: function(el) {
    el.style.cursor = "move";
    el.onmousedown = function(e) {
      let disx = e.pageX - el.offsetLeft;
      let disy = e.pageY - el.offsetTop;
      document.onmousemove = function(e) {
        let x = e.pageX - disx;
        let y = e.pageY - disy;
        let maxX =
          document.body.clientWidth -
          parseInt(window.getComputedStyle(el).width);
        let maxY =
          document.body.clientHeight -
          parseInt(window.getComputedStyle(el).height);
        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }

        el.style.left = x + "px";
        el.style.top = y + "px";
      };
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };
    };
  }
});

Vue.directive("time", {
  bind: function(el, binding) {
    console.log('1122', binding.value)
    var date = new Date(binding.value);
    var Y = date.getFullYear() + "-";
    var M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    var h = date.getHours() + ":";
    var m = date.getMinutes() + ":";
    var s = date.getSeconds();
    el.innerHTML = Y + M + D;
    // return Y + M + D;
    // return Y + M + D + h + m + s;
  }
});
