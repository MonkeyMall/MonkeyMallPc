<template>
  <div class="PC-about">
    <p class="title">关于我们</p>
    <div>
      <p>本社区主要是提供公司相关的信息查询和所查公司的相关评价，全部数据军来源于网络，个人开发者数据维护和来源是最难和麻烦的事情，还需要用户的多多帮助。</p>
      <p>后期会接入相关国家的公用的接口，保证数据的完整性和合法性，但是目前开发者的财力有限，接口接入费用比较高，后期会视情况在接入。</p>
      <p>论坛主要是为用户提供讨论的功能，后期会加入图片，视频，甚至音频的分享。</p>
    </div>
    <div>
      <p class="label-title">微信小程序</p>
      <p>猿猴宝宝:</p>
      <img src="@/static/imgs/wechat.jpg" alt="" class="wechatImg">
    </div>
    <div>
      <p class="label-title">联系我们</p>
      <p>邮箱：598349146@qq.com（小宋）</p>
      <p>扫码添加微信（请注明来意，非诚勿扰）</p>
      <img src="@/static/imgs/my.jpg" alt="" class="wechatImg">
    </div>
    <div>
      <p class="label-title">项目合作</p>
      <p>我们有很优秀的UI、前端开发工程师、后端工程师（java/php/go/node）,运维工程师，测试开发工程师</p>
      <p>您只需要说您的需求，剩下的专业的事交给我们专业的人。</p>
    </div>
  </div>
</template>

<script>
import windowRight from "@/components/windowRight/windowRight";

var that = null;
export default {
  name: "AboutPc",
  components: {
    windowRight
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {},
  computed: {},
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.PC-about {
  width: 1160px;
  margin: 0px auto;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .title {
    font-size: 26px;
    line-height: 80px;
    color: #333;
    font-weight: bold;
  }
  .label-title {
    font-size: 18px;
    line-height: 60px;
    color: #333;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    line-height: 30px;
  }
  .wechatImg {
    width: 200px;
    height: 200px;
    margin-top: 20px;
    padding: 20px 50px;
  }
}
</style>
