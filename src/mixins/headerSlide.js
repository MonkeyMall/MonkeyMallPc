import $ from "jquery";

const headerSlide = {
  methods: {
    // 全局监听滚动
    onSlide() {
      let scrollTopLast = 0;
      window.onscroll = e => {
        let scrollTop = e.target.scrollingElement.scrollTop;
        if (scrollTop - scrollTopLast > 10) {
          $("#PC_MENU").slideUp();
        } else if (scrollTop < scrollTopLast) {
          $("#PC_MENU").slideDown();
        }
        scrollTopLast = scrollTop;
      };
    }
  }
};
export default headerSlide;
