<template>
  <div class="PC-mine">
    <div class="user-info">
      <img src="@/static/imgs/logo.png">
      <div class="user-name">{{ userInfo.username }}</div>
    </div>
    <div class="mine-list">
      <div class="mine-item" @click="jump('/myRidicule')">
        <i class="iconfont">&#xe6bf;</i>
        我的调侃
      </div>
      <div class="mine-item" @click="jump('/myCollentPcRidicule')">
        <i class="iconfont">&#xe6b9;</i>
        收藏的调侃
      </div>
      <div class="mine-item" @click="jump('/addRidicule')">
        <i class="el-icon-chat-dot-square"></i>
        创建调侃
      </div>
      <div class="mine-item" @click="jump('/myLiuyan')">
        <i class="iconfont">&#xe645;</i>
        我的留言
      </div>
      <div class="mine-item" @click="jump('')">
        <i class="iconfont">&#xe606;</i>
        收货地址
      </div>
      <!-- <div class="mine-item">
        <i class="iconfont">&#xe657;</i>
        我的订单
      </div> -->
      <div class="mine-item" @click="jump('')">
        <i class="iconfont">&#xe613;</i>
        我的公司创建
      </div>
      <div class="mine-item" @click="jump('')">
        <i class="iconfont">&#xe6b9;</i>
        公司收藏
      </div>
    </div>
  </div>
</template>

<script>
import {
  companyList
} from "@/api/index";
import { getItem } from "@/utils/storage";
import windowRight from "@/components/windowRight/windowRight";
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "Mine",
  components: {
    windowRight
  },
  data() {
    return {
      userInfo: getItem('userInfo'),
      list: []
    };
  },
  created() {
    this.getData()
  },
  mounted() {},
  computed: {},
  methods: {
    async getData() {
      let {data} = await companyList();
      this.list = data || []
      console.log('list:', data);
    },
    jump(url) {
      if (!url) {
        // 敬请期待
        this.$message.warning('敬请期待')
      }
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
.PC-mine {
  width: 1200px;
  margin: 0px auto;
  display: flex;
  gap: 20px;
  .user-info {
    width: 150px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .user-name {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
  }
  .mine-list {
    flex: 1;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .mine-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      color: #333;
      cursor: pointer;
      line-height: 40px;
      &:hover {
        color: #2bc7a0;
        .icon {
          fill: #2bc7a0;
        }
      }

    }
  }
}
</style>
