<template>
  <div class="ridicule">
    <ul class="web-left">
      <li v-for="(item, index) in list" 
          :key="index" 
          :class="[lookIndex === index ? 'active' : '']"
          @click="tapBarItem('click', item._id, index)"
      >
        <p class="title">{{ item.title }}</p>
        <div :class="['content', lookIndex == index ? 'active' : '']">
          <span v-html="item.content.length > 200 && !item.isShowMore ? item.content.slice(0, 200) + '...' : item.content"></span>
          <span v-if="item.content.length > 200" class="more" @click="moreFn(index)">{{!item.isShowMore ? '阅读全文' : '收起'}}</span>
        </div>
        <div class="content-bar">
          <div class="content-bar-item" @click="tapBarItem('pl', item._id, index)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liaotian"></use>
            </svg>
            436 条评论
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
    <div class="PC-drawer" v-if="commentInfo">
      <el-drawer
        :title="commentInfo.count + '条评论'"
        :visible.sync="drawer"
        direction="rtl"
        :before-close="handleClose">
        <div class="pl-list">
          <div class="select-item overHidden" v-html="commentInfo.contentInfo[0].content"></div>
          <ul>
            <li v-for="(item, index) in commentInfo.data" :key="index">
              <p class="anthor">
                <span class="person">{{ item.userId.username }}</span>
                <span class="pl-author" v-if="commentInfo.contentInfo[0].userId == item.userId._id">作者</span>
                <span v-if="item.creatUserId">评论</span>
                <span class="person" v-if="item.creatUserId">{{ item.creatUserId.username }}</span>
                <!-- <span class="pl-author" v-if="item.creatUserId._id == item.userId._id && item.creatUserId">作者</span> -->
              </p>
              <p class="pl-cons">{{ item.commentContents }}</p>
              <div class="pl-bar">
                <div class="pl-bar-btn">回复</div>
                <div class="pl-bar-time">{{ item.startTime }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="demo-drawer__footer">
          <div class="pl-input">
            <el-input v-model="input" placeholder="理性发言，友善互动"></el-input>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import {
  getRidiculeList,
  ridiculeCommentList
} from "@/api/index";
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
      drawer: false,
      commentInfo: null,
      lookIndex: ''
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
    async getCommentList(id) {
      let data = await ridiculeCommentList({
        page: 1,
        contentId: id
      });
      console.log('data:', data);
      this.commentInfo = data
    },
    moreFn(index) {
      this.$set(this.list[index], 'isShowMore', !this.list[index].isShowMore)
    },
    tapBarItem(type,id, index) {
      this.lookIndex = index
      if(type === 'pl'){
        this.getCommentList(id)
        this.drawer = true
      }
      if(type === 'click'){
        this.moreFn(index)
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
  .pl-list {
    .select-item {
      margin: 20px;
      color: #000;
      font-size: 16px;
    }
    .pl-input {
      padding: 10px 20px;
      background: #fff;
    }
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
      padding: 10px;
      cursor: pointer;
      &:not(:last-child) {
        border-bottom: 1px solid #f8f8fa;
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
