<template>
  <div class="home">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.logo || require('@static/imgs/yuan.png')" alt="" class="c-logo">
        <div>
          <p class="name">{{ item.name }}</p>
          <p class="address">{{ item.address }}</p>
          <p>评论数：0</p>
        </div>
      </li>
    </ul>
    <div class="web-right">
      <windowRight />
    </div>
  </div>
</template>

<script>
import {
  companyList
} from "@/api/banner";
import windowRight from "@/components/windowRight/windowRight";
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "Home",
  components: {
    windowRight
  },
  data() {
    return {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 1200px;
  margin: 80px auto;
  display: flex;
  gap: 20px;
  ul {
    flex: 1;
    li {
      display: flex;
      gap: 20px;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      border: 1px solid #efefef;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 4px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
      .c-logo {
        width: 50px;
        height: 50px;
      }
      div {
        flex: 1;
        p {
          text-align: left;
          font-size: 13px;
          &.name {
            font-size: 16px;
            font-weight: bold;
          }
          &.address {
            margin-top: 5px;
          }
        }
      }
    }
  }
  .web-right {
    width: 240px;
    min-height: 100%;
  }
}
</style>
