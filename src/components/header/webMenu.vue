<template>
  <div class="pc" id="PC_MENU">
    <div class="header-menu">
      <div class="logo">
        <img src="@/static/imgs/logo.png" alt="">
        <div class="text">
          猿猴宝宝社区<br/>
          <span>- 共享找工作 -</span>
        </div>
        <div class="search">
          <el-input
            placeholder="请输入您要搜索的公司名称"
            v-model="input"
            clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <ul>
        <li>首页</li>
        <li>论坛</li>
        <li>积分商城</li>
        <li>关于我们</li>
      </ul>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { debounce } from "@/utils/deviceType";

export default {
  name: "WebMenu",
  data() {
    return {
      input: ''
    };
  },
  computed: {
    
  },
  methods: {
    onJump(url, type) {
      if (url && type === "link") {
        window.open(url);
      }
      if (url && type === "router") {
        document.body.style.overflow = 'auto'
        this.$router.push(url);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
$mult-color: #333333; //主要文字、标题 rgba(51, 51, 51, 1)
$mult-color-inverse: #fff; //反色
$mult-color-grey: #999; //辅助灰色，rgba(153, 153, 153, 1);
$mult-color-placeholder: #FC515F; // 强调文字颜色 rgba(252, 81, 95, 1)
$mult-color-tag-1: #FF8D1A; // rgba(255, 141, 26, 1);
$mult-color-tag-2: #3568F5; // rgba(53, 104, 245, 1);
$mult-color-tag-3: #00baad; // rgba(0, 186, 173, 1);
$mult-color-tag-4: #e05fe9; // rgba(224, 95, 233, 1);
$mult-color-disable: #c0c0c0;
$mult-color-blank: #000000; // rgba(0, 0, 0, 1);
#PC_MENU {
  padding: 0 20px;
  height: 60px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .header-menu {
    width: 1200px;
    height: 100%;
    margin: 0 auto; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: $mult-color;
    .logo {
      display: flex;
      align-items: center;
      gap: 5px;
      img {
        width: 40px;
        height: 40px;
      }
      .text {
        font-size: 14px;
        font-weight: 600;
        color: $mult-color-tag-3;
        margin-left: 10px;
        text-align: left;
        span{
          font-size: 12px;
          color: #999;
        }
      }
      .search {
        width: 400px;
        margin-left: 20px;
      }
    }
    ul {
      display: flex;
      gap: 30px;
      li {
        cursor: pointer;
        &:hover {
          color: $mult-color-tag-3;
        }
      }
    }
  }
}
</style>
