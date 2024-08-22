<template>
  <transition name="fade">
    <div :class="[`dialog-${platform}`]" v-if="dialogStatus">
      <div class="fix">
        <div :class="[`headline ${title[1] ? '' : 'headline-only'}`]">
          <span class="first">{{title[0]}}</span>
          <span :class="[`close close-${platform}`]" @click="update_dialog_status({dialogStatus: false})"><img :src="close" alt=""></span>
        </div>
        <div class="second" v-if="title[1]">{{ title[1] }}</div>
      </div>
      <div class="container">
        <slot name="content"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "VehicleDialog",
  props: {
    platform: {
      type: String,
      default: 'pc'
    },
    title: {
      type: Array,
      default: () =>{}
    }
  },
  computed: mapState(["dialogStatus"]),
  data(){
    return{
      close: require('@/static/close.png')
    }
  },
  methods: {
    ...mapActions(['update_dialog_status']),

  }
}
</script>

<style lang="scss" scoped>
.dialog-pc{
  position: fixed;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: scroll;
  .fix{
    //background: #30BF94;
    box-sizing: border-box;
    padding-left: 115px;
    padding-right: 58px;
    padding-top: 63px;
    .headline{
      display: flex;
      justify-content: space-between;
      align-items: center;
        &-only{
          padding-bottom: 63px;
        }
      .first{
        font-size: 60px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #FFFFFF;
        line-height: 84px;
      }
      .close{
        transition: 0.5s;
        cursor: pointer;
        &:hover{
          transition: 0.5s;
          transform: scale(1.2);
        }
        img{
          width: 32px;
        }
        &-zh{}
        &-en{}
      }
    }
    .second{
      text-align: left;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #D8D8D8;
      line-height: 57px;
      padding-bottom: 33px;
    }
  }
  .container{
    //background: #FFFFFF;
    flex: 1;
    margin-left: auto;
    margin-right: auto;
    width: calc(1690vw / 19.2);
    position: relative;
    z-index: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>
