<template>
	<div class="navbar">
    <div>
      <img src="../../assets/logo.png" alt="" class="logo">
      <ul class="middle-menu">
        <li>首页</li>
        <li>产品</li>
        <li>关于我们</li>
      </ul>
    </div>
    <div class="right-menu">
      <div>登录</div>
      <div>注册</div>
    </div>
	</div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 30px;
  .logo {
    height: 30px;
  }
  ul {
    display: flex;
    gap: 10px;
    li {

    }
  }
}
</style>

<script setup>
import { CaretBottom } from "@element-plus/icons";
import { ref, reactive } from "vue";
import { useStore } from "vuex";


const store = useStore();


</script>