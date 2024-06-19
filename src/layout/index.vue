<template>
	<div
		class="app-wrapper"
	>
    <Navbar></Navbar>
    <!-- 内容区 -->
    <app-main />
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.module.scss';
  .app-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .fixed-header {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width #{$sideBarDuration};  }
  .hideSidebar .fixed-header {
    width: calc(100% - #{$hideSideBarWidth});
  }
</style>

<script setup>
import {} from "vue";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppMain from "./components/AppMain";
import variables from "@/styles/variables.module.scss";
import TagsView from "@/components/TagsView";
import store from "@/store";

</script>