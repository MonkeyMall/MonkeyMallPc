<template>
  <div class="PC-home">
    <ul class="web-left" v-if="list.length">
      <li v-for="(item, index) in list" :key="index" @click="goComponyInfo(item._id)">
        <img :src="item.logo || require('@static/imgs/yuan.png')" alt="" class="c-logo">
        <div>
          <p class="name">{{ item.name }}</p>
          <p class="address">{{ item.address }}</p>
          <p>浏览量：{{ item.views }}</p>
        </div>
      </li>
      <div class="pageFy">
        <pageNum 
          :currentPage="currentPage" 
          :total="total" 
          @changePage="handleCurrentChange"
        />
      </div>
    </ul>
    <empty v-else />
    <!-- <div class="web-right">
      <windowRight />
    </div> -->
  </div>
</template>

<script>
import {
  companyList,
  commentsCollect
} from "@/api/index";
import windowRight from "@/components/windowRight/windowRight";
import empty from "@/components/empty/index";
import pageNum from "@/components/pageNum/index.vue";
import { mapState, mapMutations, mapActions } from "vuex";


var that = null;
export default {
  name: "Home",
  components: {
    windowRight,
    empty,
    pageNum
  },
  data() {
    return {
      list: [],
      currentPage: 1,
      total: 0,
      query: {
        page: 1,
        name: '',
        reffer: 'pc'
      }
    };
  },
  created() {
    this.getData()
  },
  mounted() {},
  computed: {
    ...mapState(['searchText'])
  },
  watch: {
    searchText: {
      handler(newVal) {
        this.query.name = newVal
        this.getData()
      },
      immediate: true
    }
  },
  methods: {
    async getData(type) {
      let {data, count} = await companyList(this.query);
      this.list = data || []
      this.total = count
      console.log('list:', data);
    },
    goComponyInfo(id) {
      // this.$router.push(`/componyInfo`);
      // this.$router.push({
      //   path: `/companyInfo/${id}`
      // })
      this.$router.push({
        path: "/componyInfo",
        query: {
          id: id
        }
      });

    },
    handleCurrentChange(val) {
      console.log('子组件再调用父组件的方法:', val);
      this.query.page = val
      this.getData()
    }
  }
};
</script>

<style lang="scss" scoped>
.PC-home {
  width: 1200px;
  margin: 0 auto;
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
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 4px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
      background: #fff;
      cursor: pointer;;
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
    background: #fff;
  }
}
</style>
