<template>
  <div class="mb-menu">
    
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "MbMenu",
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    
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
