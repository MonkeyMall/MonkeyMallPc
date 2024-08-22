<template>
  <div v-if="customerService" class="iframe animated fadeIn">
    <span class="close" @click="onClose"></span>
    <iframe
      name="myiframe"
      id="myiframe"
      marginwidth="0"
      marginheight="0"
      hspace="0"
      vspace="0"
      frameborder="0"
      scrolling="no"
      :src="iframeUrl"
      class="content"
    >
    </iframe>
  </div>
</template>

<script>
import { data_imToken } from "@/api/TestDrive";
import { mapState, mapMutations } from "vuex";
export default {
  name: "IframeContainer",
  data() {
    return {
      status: false,
      iframeUrl: ""
    };
  },
  mounted() {
    this.onLineService();
  },
  computed: mapState(["customerService"]),
  methods: {
    ...mapMutations(["UPDATE_CUSTOMER_SERVICE"]),
    onClose() {
      this.UPDATE_CUSTOMER_SERVICE({ customerService: false });
    },
    onChangeStatus() {
      this.status = !this.status;
    },
    onLineService() {
      let wmId = localStorage.getItem("openId");
      if (!wmId) {
        wmId = "WM" + new Date().getTime() + ((Math.random() * 100) | 0);
        localStorage.setItem("openId", wmId);
      }
      const params = {
        url: `https://${process.env.NODE_ENV === 'production' ? 'imlive' : 'imtest'}.wm-motor.com/visitor/mobile/pages/chat/chat.html?openId=${wmId}&type=1&channel=a`
      };
      data_imToken(params)
        .then(res => {
          this.iframeUrl = res.data.url;
        })
        .catch(() => {
          // console.log("err", err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.iframe {
  position: fixed;
  z-index: 200;
  right: 160px;
  top: 150px;
  .close {
    position: fixed;
    right: 160px;
    display: inline-block;
    width: 50px;
    height: 50px;
    background: transparent;
    cursor: pointer;
    //background: #30bf94;
  }
  .content {
    width: 25vw;
    height: 75vh;
  }
}
</style>
