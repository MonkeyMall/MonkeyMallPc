<template>
  <div :class="['PC-toolbar', scrollHide ? 'toolbar-hide fadeOut animated' : '']" v-show="isShow">
    <el-breadcrumb separator="/">
      <!-- :to="{ path: '/' }" -->
      <el-breadcrumb-item 
        v-for="(item,index) in list" 
        :key="index">
        <a :href="item.path" v-if="item.path">{{ item.text }}</a>
        <span v-else>{{ item.text }}</span>
      </el-breadcrumb-item>
      <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script>
import { onScroll } from "@/utils/deviceType";
export default {
  name: "ToolBar",
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      list: [],
      scrollHide: false
    };
  },
  watch: {
    
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollHide = onScroll(30);
    });
    this.list = this.$route.meta.toolbartext || [];
    console.log('面包屑数据', this.list)
    // this.isShow = this.topShow;
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.PC-toolbar {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  line-height: 50px;
  padding: 20px 0;
  // background: #fff;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
