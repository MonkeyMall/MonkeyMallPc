<template>
  <div class="mb-menu">
    <div class="mb-menu-header">
      <img class="logo" :src="icon.logo" alt="" @click="onJump('/', 'router')"/>
      <div class="container">
        <a href="tel:4006-999-666"><img class="service" :src="icon.phone" alt="" /></a>
        <router-link tag="div" to="/TestDrive" class="test-drive">{{ $t('TestDrive') }}</router-link>
        <img class="menu-btn" :src="[menuStatus ? icon.close : icon.menu]" alt="" @click="toggleMenu"/>
      </div>
    </div>
    <div class="mb-menu-list" id="mb-menu-list">
      <template>
        <div class="item" v-for="(item, index) in menu_mb" :key="index" @click="onToggleChildren(item, index)">
          <div class="father-menu">
            <span @click="onJump(item.url, item.type)">
              {{ item.name }}
              <img :class="[arrowStatus && activeIndex === index ? 'arrow-active' : 'arrow']" v-if="item.children" :src="icon.arrow" alt="" @click="onClose" />
            </span>
          </div>
          <div v-if="item.children" class="children-menu" :id="`keys${index}`">
            <span v-for="(v, k) in item.children" :key="k" @click="onJump(v.url, v.type)">{{ v.name }}</span>
          </div>
        </div>
        <div class="lang" @click="setLang">
          <img :src="language" alt="">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "MbMenu",
  data() {
    return {
      icon: {
        logo: `${this.Resource}mb/logo-mb.png`,
        phone: `${this.Resource}mb/phone-mb.png`,
        menu: `${this.Resource}mb/menus-mb.png`,
        close: `${this.Resource}mb/close-mb.png`,
        arrow: `${this.Resource}mb/arrow-mb.svg`,
        zh: `${this.Resource}mb/lang-en-mb.png`,
        en: `${this.Resource}mb/lang-zh-mb.png`,
      },
      menuStatus: false,
      menu_mb: this.$t('menuList'),
      activeIndex: null,
      arrowStatus: false
    };
  },
  computed: {
    language: function() {
      return this.lang === 'zh' ? this.icon.zh : this.icon.en
    },
    toggleLists: function() {
      const b = []
      this.menu_mb.map((item,index) => {
        if(item.children){
          b.push(index)
        }
      });
      return b
    }
  },
  watch: {
    menuStatus: function(val) {
      if(val) {
        document.body.style.overflow = 'hidden'
      } else{
        document.body.style.overflow = 'auto'
      }
    }
  },
  methods: {
    toggleMenu() {
      this.menuStatus = !this.menuStatus;
      $("#mb-menu-list").slideToggle(500);
    },
    onToggleChildren(item, index)  {
      this.activeIndex = index;
      this.toggleLists.filter(item => item !== index).map(item => {
        $("#keys" + item).slideUp()
      })
      if(item.children) {
        this.arrowStatus = $("#keys" + index) && $("#keys" + index)[0].style.display === "block" ? false : true
        $("#keys" + index).slideToggle()
      }
    },
    onJump(url, type) {
      if (url && type === "link") {
        window.open(url);
      }
      if (url && type === "router") {
        document.body.style.overflow = 'auto'
        this.$router.push(url);
        this.toggleMenu()
      }
    },
    onClose() {
      this.activeIndex = null
    },
    setLang() {
      const lang = localStorage.getItem("language");
      const l = lang === "zh" ? "en" : "zh";
      this.setLanguage(l);
    }
  }
};
</script>

<style lang="scss" scoped>
.mb-menu {
  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  //height: 100vh;
  left: 0;
  top: 0;
  z-index: 9999999;
  &-header {
    @include space-between;
    box-sizing: border-box;
    padding-left: 44px;
    padding-right: 42px;
    height: 100px;
    background: white;
    .logo {
      width: 132px;
      height: auto;
    }
    .container {
      @include space-between;
      a{
        @include center;
      }
      .service{
        width: 32px;
      }
      .test-drive {
        @include center;
        box-sizing: border-box;
        width: 140px;
        height: 44px;
        font-size: 24px;
        border: 1px solid #000000;
        margin: 0 44px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
      }
      .menu-btn {
        width: 32px;
      }
    }
  }
  &-list {
    display: none;
    width: 100%;
    height: calc(100vh - 100px);
    background: rgba(255, 255, 255, 0.95);
    //transition: 0.5s ease-in-out;
    //background: #3dbe94;
    overflow-y: scroll;
    .item {
      width: 100vw;
      display: flex;
      flex-direction: column;
      font-size: 36px;
      color: #26333f;
      &:not(:last-child) {
        margin-bottom: 112px;
      }
      &:first-child {
        margin-top: 90px;
      }
      .father-menu {
        @include center;
        span{
          position: relative;
          .arrow {
            width: 22px;
            position: absolute;
            right: -42px;
            top: calc(50% - (11px * 8 / 14));
            &-active{
              width: 22px;
              position: absolute;
              right: -42px;
              top: calc(50% - (11px * 8 / 14));
              transform: rotate(180deg);
            }
          }
        }
      }
      .children-menu {
        display: none;
        flex-direction: column;
        align-items: center;
        text-align: center;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 28px;
          font-size: 28px;
          color: #333333;
          margin-top: 60px;
        }
      }
    }
    .lang{
      width: 100%;
      @include center;
      padding-top: 160px;
      padding-bottom: 266px;
      img{
        width: 40px;
      }
    }
  }
}
</style>
