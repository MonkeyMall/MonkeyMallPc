<template>
  <div class="footer-box">
    <img class="footer-top-img" v-if="lang === 'zh'" style="width: 100%;" :src="qrcode" alt="小宋模板，智敬每个你，订车用车看车" data-test="test" />
    <div class="pc">
      <div class="footerContainer">
        <div class="footerLeftMenu">
          <ul class="leftList">
            <li
              v-for="(item, index) in leftList"
              :key="index"
              :class="{ first: index == 0 }"
              @click="onJump(item)"
            >
              {{ item.name }}
            </li>
          </ul>
          <ul class="rightList">
            <li
              v-for="(item, index) in rightList"
              :key="index"
              :class="{ first: index == 0 }"
              @click="onJump(item)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="rightContainer">
          <div class="logo">
            <img @click="goHome" :src="icon.logo" alt="小宋模板公众号，微博，邮箱" />
          </div>
          <div class="contactType" v-if="language.text === 'EN'">
            <el-popover placement="top" trigger="click" popper-class="popover">
              <div class="hover">
                <div class="qrcode">扫一扫，关注“小宋模板”</div>
              </div>
              <img
                slot="reference"
                class="contactTypeLeft"
                src="@/static/wechat.png"
                alt="小宋模板微信公众号"
              />
            </el-popover>
            <img
              @click="microBlog"
              class="contactTypeLeft"
              src="@/static/micro-blog.png"
              alt="小宋模板官方微博"
            />
          </div>
          <div class="language" @click="setLang">
            <div class="languageText">{{ language.text }}</div>
            <div class="languageLine">|</div>
            <div class="languageImg"><img :src="language.icon" alt="中英文切换" /></div>
          </div>
        </div>
      </div>
      <div class="Copyright">
        <div>Copyright© 2022 WM Motor All Rights Reserved 小宋模板版权所有</div>
        <div><a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备18006332号-6</a><a style="margin-left: 10px;" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011802004057" target="_blank">  沪公网安备31011802004057号</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "webMenu",
  data() {
    return {
      icon: {
        logo: `${this.Resource}wm-logo.png`
      },
      qrcode: `${this.Resource}footer/footer.jpg`,
      leftList: this.$t("footerMenuList.leftList"),
      leftListEn: [
        {
          name: "WELTMEISTER Center",
          type: "link",
          url: "https://official.wm-motor.com/fanclub.html"
        },
        {
          name: "WELTMEISTER News",
          type: "router",
          url: "/News"
        },
        {
          name: "Contact Us",
          type: "link",
          url: "https://official.wm-motor.com/contactus.html"
        }
      ],
      rightList: this.$t("footerMenuList.rightList"),
      rightListEn: [
        { name: "" },
        {
          name: "Download Center",
          type: "link",
          url: "https://official.wm-motor.com/download/pictures.html"
        }
      ]
    };
  },
  computed: {
    language: function() {
      return localStorage.getItem("language") === "zh"
        ? { icon: `${this.Resource}lg_pc_en.png`, text: "EN" }
        : { icon: `${this.Resource}lg_pc_zh.png`, text: "中文" };
    }
  },
  created() {},
  watch: {},
  mounted() {},
  methods: {
    onJump(event) {
      if (event && event.type === "link") {
        window.open(event.url, '_self');
      }
      if (event && event.type === "router") {
        this.$router.push(event.url);
      }
    },
    setLang() {
      const lang = localStorage.getItem("language");
      const l = lang === "zh" ? "en" : "zh";
      this.setLanguage(l);
    },
    goHome() {
      this.$router.push({
        path: "/"
      });
    },
    microBlog() {
      window.open("https://m.weibo.cn/u/6003664959", "小宋官方新浪微博");
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background: white;
  height: auto;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  &.webFooter {
    height: 100vh;
    background: #1b1b1b;
    position: relative;
    .footer-box {
      height: 100vh;
      position: relative;
      .footer-top-img{
        padding-top: 100px;
      }
      .pc {
        position: absolute;
        bottom: 80px;
      }
    }
  }
}
.pc {
  height: 551px;
  // background: #1b1b1b;
  text-align: left;
  overflow: hidden;
  .footerContainer {
    margin-top: 119px;
    margin-left: 199px;
    margin-right: 199px;
    display: flex;
    justify-content: space-between;
    .footerLeftMenu {
      display: flex;
      .leftList {
        font-size: 17px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #999999;
        line-height: 23px;
        li {
          list-style: none;
          margin-bottom: 29px;
          cursor: pointer;
          height: 23px;
          line-height: 23px;
        }
        li:hover {
          color: #ffffff;
        }
        .first {
          color: #e0e1e2;
        }
      }
      .rightList {
        margin-left: 186px;
        font-size: 17px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: normal;
        color: #999999;
        line-height: 23px;
        li {
          list-style: none;
          margin-bottom: 29px;
          cursor: pointer;
          height: 23px;
          line-height: 23px;
        }
        li:hover {
          color: #ffffff;
        }
        .first {
          color: #e0e1e2;
        }
      }
    }
    .rightContainer {
      .logo {
        text-align: end;
        img {
          width: 122px;
          cursor: pointer;
        }
      }
      .contactType {
        text-align: end;
        margin-top: 95px;
        img {
          width: 36.91px;
          cursor: pointer;
        }
        .contactTypeLeft {
          margin-right: 31px;
        }
      }
      .language {
        cursor: pointer;
        width: 63px;
        height: 26px;
        line-height: 26px;
        font-size: 13px;
        border-radius: 2px;
        border: 1px solid #979797;
        color: #999999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 41px;
        position: absolute;
        right: 199px;
        padding-left: 8px;
        padding-right: 8px;
        div {
          text-align: center;
        }
        .languageText {
          font-size: 13px;
          font-family: Alibaba-PuHuiTi-B, Alibaba-PuHuiTi;
          font-weight: normal;
          color: #999999;
          line-height: 13px;
        }
        .languageImg {
          width: 33.3%;
          img {
            width: 13px;
            margin-top: 6px;
          }
        }
      }
    }
  }
  .Copyright {
    width: 1524px;
    height: 1px;
    border-top: 1px solid #383838;
    margin-left: 199px;
    margin-top: 93px;
    //display: flex;
    text-align: center;
    div:first-child {
      font-size: 17px;
      font-family: Helvetica;
      line-height: 20px;
      margin-top: 17px;
    }
    a{
      color: #8b8787;
      text-decoration: none;
    }
  }
}
</style>
<style>
.popover {
  width: 172px !important;
  padding: 18px 15px 0 15px !important;
}
.hover {
  text-align: center;
}
.qrcode {
  font-size: 12px;
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  font-weight: normal;
  color: #595959;
  line-height: 12px;
  margin-bottom: 28px;
  margin-top: 17px;
}
.qrcodeImg {
  width: 125px;
  height: 125px;
  margin-right: 5px;
}
</style>
