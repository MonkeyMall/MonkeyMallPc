<template>
  <div class="pc" id="PC_MENU">
    <div class="header-menu">
      <div class="logo">
        <img src="@/static/imgs/logo.png" alt="">
        <div class="text">
          猿猴宝宝社区<br/>
          <span>- 共享找工作 -</span>
        </div>
        <div class="search" v-if="isSearch">
          <el-input
            placeholder="请输入您要搜索的公司名称"
            v-model="input"
            clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li @click="onJump('/', 'router')" :class="[$route.meta.name == 'home' ? 'active' : '']">首页</li>
          <li @click="onJump('/ridicule', 'router')" :class="[$route.meta.name == 'ridicule' ? 'active' : '']">论坛</li>
          <li @click="onJump('', 'router')">积分商城</li>
          <li @click="onJump('/about', 'router')" :class="[$route.meta.name == 'about' ? 'active' : '']">关于我们</li>
        </ul>
        <div v-if="userInfo && userInfo.username" class="user-info">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ userInfo.username }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="el-icon-house"></i>
                个人中心
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-document-add"></i>
                创建公司
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-chat-dot-square"></i>
                创建调侃
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-house"></i>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div v-else class="login-btn" @click="onJump('/login', 'router')">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { debounce } from "@/utils/deviceType";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "WebMenu",
  data() {
    return {
      input: '',
      tabName: '',
      isSearch: false
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created() {
    console.log('路由信息：', this.$route);
    if (this.$route.meta.name == 'home') {
      this.isSearch = true
    }
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
    clickTrigger() {
      
    }
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
    .menu {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        gap: 30px;
        li {
          cursor: pointer;
          &.active {
            color: $mult-color-tag-3;
          }
          &:hover {
            color: $mult-color-tag-3;
          }
        }
      }
      .user-info {
        margin-left: 30px;
        cursor: pointer;
      }
      .login-btn {
        margin-left: 20px;
        color: #fff !important;
        border-radius: 4px;
        text-align: center;
        width: 60px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        background-image: linear-gradient(45deg, #37abec, #2466f5);
        cursor: pointer;
        &:hover {
          color: $mult-color-tag-3; 
        }
      }
    }
  }
}
</style>
