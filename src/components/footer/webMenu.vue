<template>
  <div class="footer-box">
    
  </div>
</template>

<script>
export default {
  name: "webMenu",
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  created() {},
  watch: {},
  mounted() {},
  methods: {
    
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
