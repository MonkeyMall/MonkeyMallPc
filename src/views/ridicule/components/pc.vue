<template>
  <div class="ridicule">
    <ul class="web-left">
      <li v-for="(item, index) in list" :key="index">
        <p class="title">{{ item.title }}</p>
        <div class="content">
          <span v-html="item.content.length > 200 && !item.isShowMore ? item.content.slice(0, 200) + '...' : item.content"></span>
          <span v-if="item.content.length > 200" class="more" @click="moreFn(index)">阅读全文</span>
        </div>
        <div class="content-bar">
          <div class="content-bar-item" @click="tapBarItem('pl')">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liaotian"></use>
            </svg>
            431 条评论
          </div>
          <div class="content-bar-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang1"></use>
            </svg>
            收藏
          </div>
        </div>
      </li>
    </ul>
    <div class="web-right">
      <windowRight />
    </div>
    <div class="PC-drawer">
      <el-drawer
        title="431条评论"
        :visible.sync="drawer"
        direction="rtl"
        :before-close="handleClose">
        <div class="pl-list">
          <ul>
            <li>
              <p class="anthor">
                <span class="person">songxiaoyao</span>
                <span class="pl-author">作者</span>
              </p>
              <p class="pl-cons">阿斯达大所奥术大师大安达市多</p>
              <div class="pl-bar">
                <div class="pl-bar-btn">回复</div>
                <div class="pl-bar-time">2012-09-09</div>
              </div>
            </li>
            <li>
              <p class="anthor">
                <span class="person">songxiaoyao</span>
                <span>评论</span>
                <span class="person">张三</span>
              </p>
              <p class="pl-cons">阿斯达大所奥术大师大安达市多</p>
              <div class="pl-bar">
                <div class="pl-bar-btn">回复</div>  
                <div class="pl-bar-time">2012-09-09</div>
              </div>
            </li>
          </ul>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import {
  getRidiculeList
} from "@/api/banner";
import windowRight from "@/components/windowRight/windowRight";
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "Ridicule",
  components: {
    windowRight
  },
  data() {
    return {
      list: [],
      isShowMore: false,
      drawer: false
    };
  },
  created() {
    this.getData()
  },
  mounted() {},
  computed: {},
  methods: {
    async getData() {
      let {data} = await getRidiculeList();
      data.map(item =>{
        item.isShowMore = false
      })
      this.list = data || []
      console.log('list:', data);
    },
    moreFn(index) {
      this.$set(this.list[index], 'isShowMore', !this.list[index].isShowMore)
    },
    tapBarItem(type) {
      if(type === 'pl'){
        this.drawer = true
      }
    },
    handleClose(done) {
      done();
    }
  }
};
</script>

<style lang="scss" scoped>
.PC-drawer {
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
  .pl-list {
    ul {
      li {
        padding: 10px 0;
        border-bottom: 1px solid #f8f8fa;
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
      }
    } 
  }
}
.ridicule {
  width: 1200px;
  margin: 80px auto;
  display: flex;
  gap: 20px;
  ul {
    background: #fff;
    padding: 20px;
    flex: 1;
    li {
      &:not(:last-child) {
        border-bottom: 1px solid #f8f8fa;
      }
      padding: 10px;
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
