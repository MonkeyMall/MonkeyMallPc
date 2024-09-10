<template>
  <div class="PC-ridicule">
    <ul class="web-left" v-if="list.length > 0">
      <li v-for="(item, index) in list" 
        :key="index" 
        :class="[lookIndex === index ? 'active' : '']"
      >
        <p class="title" @click="lookDetail(item, index)">{{ item.title }}</p>
      </li>
      <div class="pageFy">
        <pageNum 
          :currentPage="currentPage" 
          :total="total" 
          @changePage="handleCurrentChange"
        />
      </div>
    </ul>
    <div v-else class="empty">
      <p>您暂无收藏任何调侃</p>
      <div class="creatTk" @click="goTkFn">调侃列表</div>
    </div>
  </div>
</template>

<script>
import {
  getRidiculeCollentList,
  ridiculeCommentList,
  addCommentRidicule
} from "@/api/index";
import windowRight from "@/components/windowRight/windowRight";
import pageNum from "@/components/pageNum/index.vue";
import { mapState, mapMutations } from "vuex";

var that = null;
export default {
  name: "Ridicule",
  components: {
    windowRight,
    pageNum
  },
  data() {
    return {
      list: [],
      drawer: false,
      commentInfo: null,
      lookIndex: '',
      plText: '',
      fhText: '',
      id: '', // 当前操作的文章id
      currentPage: 1,
      total: 0,
      query: {
        page: 1,
        title: '',
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
        this.query.title = newVal
        this.getData()
      },
      immediate: true
    }
  },
  methods: {
    // 评论列表
    async getData() {
      let {data, count} = await getRidiculeCollentList(this.query);
      data = [...data.map(item =>{
        return item.ridiculeId
      })]
      data.map(item =>{
        item.isShowMore = false
      })
      this.list = data || []
      this.total = count
      console.log('list:', data);
    },
    handleCurrentChange(val) {
      console.log('子组件再调用父组件的方法:', val);
      this.query.page = val
      this.getData()
    },
    lookDetail(item) {
      this.$router.push({
        path: '/ridicule',
        query: {
          title: item.title
        }
      })
    },
    goTkFn() {
      this.$router.push('/ridicule')
    }
  }
};
</script>

<style lang="scss" scoped>

.PC-ridicule {
  width: 100%;
  margin: 0px auto;
  display: flex;
  gap: 20px;
  .empty {
    width: 100%;
    text-align: center;
    padding: 20px;
    color: #8491a5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .creatTk {
      width: 100px;
      line-height: 30px;
      text-align: center;
      border-radius: 30px;
      background: #2bc7a0;
      margin-top: 10px;
      color: #fff;
      cursor: pointer;
    }
  }
  .PC-drawer {
    position: relative;
    height: 100vh;
    ::v-deep .el-drawer__header {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      text-align: left;
    } 
    ::v-deep .el-drawer__body {
      font-size: 14px;
      text-align: left;
    }
    ::v-deep .demo-drawer__footer{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 20px;
      background: #fff;
    }
    .pl-input {
      display: flex;
      gap: 10px;
    }
    .pl-list {
      margin-bottom: 80px;
      .select-item {
        margin: 20px;
        color: #000;
        font-size: 16px;
      }
      ul {
        li {
          padding: 10px 0;
          &:not(:last-child) {
            border-bottom: 1px dashed #EBEEF3;
          }
          .anthor {
            margin-bottom: 5px;
            font-size: 12px;
            color: #8491a5;
            display: flex;
            gap: 10px;
            align-items: center;
            .person {
              font-size: 15px;
            }
          }
        }
      }
      ul {
        li {
          padding: 10px 0;
          border-bottom: 1px dashed #EBEEF3;
          .anthor {
            margin-bottom: 5px;
            font-size: 12px;
            color: #8491a5;
            display: flex;
            gap: 10px;
            align-items: center;
            .person {
              font-size: 15px;
              font-weight: bold;
              text-decoration: none;
              color: rgb(55, 58, 64);
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .pl-author {
              background: #f8f8fa;
              padding: 2px 8px;
              border-radius: 5px;
              color: #8491a5;
            }
          }
          .pl-cons {
            margin-bottom: 5px;
          }
          .pl-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-btn {
              color: rgb(132, 145, 165);
              cursor: pointer;
              &:hover {
                color:rgb(57, 62, 71);
              }
            }
            &-time {
              color: #8491a5;
            }
          }
          .hf-input {
            margin-top: 5px;
          }
        }
      } 
      .empty {
        text-align: center;
        padding: 20px;
        color: #8491a5;
        margin-top: 60px;
      }
    }
  }
  .pageFy {
    margin-top: 20px;
  }
  ul {
    background: #fff;
    padding: 20px;
    flex: 1;
    li {
      padding: 10px;
      cursor: pointer;
      &:not(:last-child) {
        border-bottom: 1px dashed #EBEEF3;
      }
      &.active {
        border: 1px solid rgba(0, 186, 173, .6);
        border-radius: 8px;
      }
      .title{
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        margin-bottom: 5px;
      }
      .content{
        font-size: 15px;
        color: #191b1f;
        text-align: left;
        .more{
          color: #09408e;
          cursor: pointer;
        }
      }
      .content-bar {
        display: flex;
        gap: 15px;
        &-item {
          font-size: 14px;
          color: #8491a5;
          cursor: pointer;
          margin-top: 5px;
          .icon{
            fill: #8491a5;
          }
          &:hover {
            color: rgba(0, 186, 173, .6);
            .icon{
              fill: rgba(0, 186, 173, .6);
            }
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
