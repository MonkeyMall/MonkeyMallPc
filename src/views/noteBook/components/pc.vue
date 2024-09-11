<template>
  <div class="PC-ridicule">
    <div class="search">
      <div class="btns">
        <div
          :class="['categoryOptions', 'categoryOptions6', query.category === '' ? 'active' : '']"
          @click="filterFn('')">
          全部
        </div>
        <div
          :class="['categoryOptions', 'categoryOptions6', query.category === 'mine' ? 'active' : '']"
          @click="filterFn('')">
          我的
        </div>
      </div>
      <div class="creatBtn">
        <i class="iconfont">&#xe61f;</i>
        创建备忘录
      </div>
    </div>
    <ul class="web-left" v-if="list.length">
      <li v-for="(item, index) in list" 
        :key="index" 
        :class="[lookIndex === index ? 'active' : '', item.by < 0 && item.isShowMore ? 'fixed' : '']"
      >
      <!-- @click="tapBarItem('click', item._id, index)" -->
       <div :ref="'p_' + index">
         <div class="title">
          <div class="categoryOptions-item">
          <div 
            :class="['categoryOptions', 'categoryOptions' + item.category]"
            v-for="(options, i) in categoryOptions" 
            :key="i" 
            v-if="options.value === item.category"
            >
            <!-- v-if="options.value === item.category" -->
            {{ options.label }}
          </div>
          </div>
          {{ item.title }}
        </div> 
         <div :class="['content', item.isShowMore ? 'active' : '']">
           <div v-html="item.content.length > 100 && !item.isShowMore ? item.content.slice(0, 100) + '...' : item.content"></div>
           <!-- <span v-if="item.content.length > 200" class="more" @click="moreFn(index)">{{!item.isShowMore ? '阅读全文' : '收起'}}</span> -->
         </div>
         <div class="creatTime">
          发布于：<span class="content-bar-right" v-time="item.startTime"></span>
        </div>
         <div class="content-bar-box">
           <div class="content-bar">
             <div class="content-bar-left">
               <div class="content-bar-item" @click="tapBarItem('pl', item._id, index)">
                <i class="iconfont">&#xe61d;</i>
                 <!-- <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-liaotian"></use>
                 </svg> -->
                 查看 {{ countNumArr[index] }} 条评论
               </div>
               <div class="content-bar-item" @click="tapBarItem('pl', item._id, index)">
                <i class="iconfont">&#xe604;</i>
                 <!-- <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-31pinglun"></use>
                 </svg> -->
                 评论
               </div>
               <div class="content-bar-item" @click="collenctFn(item)">
                <i :class="['iconfont', collentTypeArr[index] ? 'active zoomIn animated' : '']">&#xe661;</i>
                 <!-- <svg :class="['icon', collentTypeArr[index] ? 'active' : '']" aria-hidden="true">
                   <use xlink:href="#icon-shoucang1"></use>
                 </svg> -->
                 收藏
               </div>
             </div>
             <div class="content-bar-right">
              <span v-if="item.content.length > 200" class="more" @click="moreFn(index)">{{!item.isShowMore ? '阅读全文' : '收起'}}</span>
              <i class="iconfont" v-if="item.content.length > 200" v-show="!item.isShowMore">&#xe7a2;</i>
              <i class="iconfont" v-if="item.content.length > 200" v-show="item.isShowMore">&#xe7a3;</i>
             </div>
           </div>
         </div>
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
    <!-- 评论右弹框 -->

  </div>
</template>

<script>
import {
  getRidiculeList,
  ridiculeCommentList,
  addCommentRidicule,
  ridiculeCollent,
  getRidiculeIsCollent,
  setRidiculeView
} from "@/api/index";
import {
  isLogin,
  usernameFormat
} from "@/utils/index";
import windowRight from "@/components/windowRight/windowRight";
import empty from "@/components/empty/index";
import pageNum from "@/components/pageNum/index.vue";
import { mapState, mapMutations } from "vuex";
import dictData from '@/utils/dictData.js'


var that = null;
export default {
  name: "Ridicule",
  components: {
    windowRight,
    empty,
    pageNum
  },
  data() {
    return {
      categoryOptions: dictData.categoryOptions,
      list: [],
      countNumArr: [],
      collentTypeArr: [],
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
        category: '',
        reffer: 'pc'
      }
    };
  },
  created() {
    this.getData()
  },
  mounted() {
    if (this.$route.query.title) {
      this.query.title = this.$route.query.title
    }
  },
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
    usernameFormat,
    // 监听
    scrollItemToBottom(list) {
      window.addEventListener('scroll', () => {
        for (let i = 0; i <= list.length; i++) {
          let [div] = this.$refs['p_' + i ]  // 特别注意这一行，赋值给了数组
          this.$set(this.list[i], 'by', window.innerHeight - div.getBoundingClientRect().bottom )
          
          // this.list[i].by = div.getBoundingClientRect().y - window.innerHeight
          // console.log("-"+i+"-",div.getBoundingClientRect(), window.innerHeight)
        }
      })
    },
    // 评论列表
    async getData() {
      let {data, count, countNumArr, collentTypeArr} = await getRidiculeList(this.query);
      data.map(item =>{
        item.isShowMore = false
      })
      this.list = data || []
      this.scrollItemToBottom(data)
      this.total = count
      this.countNumArr = countNumArr
      this.collentTypeArr = collentTypeArr
    },
    filterFn(val) {
      this.query.category = val
      this.getData()
    },
    handleCurrentChange(val) {
      this.query.page = val
      this.getData()
    },
    // 内容的评论列表
    async getCommentList(id) {
      let data = await ridiculeCommentList({
        page: 1,
        contentId: id
      });
      data.data.map(item =>{
        item.isInput = false
      })
      this.commentInfo = data
    },
    // 点击阅读更多
    async moreFn(index) {
      this.lookIndex = index
      if (!this.list[index].isShowMore) {
        await setRidiculeView({
          id: this.list[index]._id
        })
      }
      this.list.forEach((item, i) => {
        if(i === index){
          item.isShowMore = !item.isShowMore
        }else{
          item.isShowMore = false
        }
      })
      // this.$set(this.list[index], 'isShowMore', !this.list[index].isShowMore)
    },
    // 收藏
    async collenctFn(item) {
      if(!isLogin()) return
      let data = await getRidiculeIsCollent({
        ridiculeId: item._id
      })
      console.log('收藏数据', data)
      // 还没有收藏
      let dataCollent = await ridiculeCollent({
        ridiculeId: item._id,
        type: data.isCollect ? 0 : 1 // 收藏类型 1 收藏 2 取消收藏
      })
      if (dataCollent.code === 200) {
        this.getData()
      }
    },
    // 点击回复
    hfFn(index) {
      if(!isLogin()) return
      this.id = this.commentInfo.data[index]._id
      this.$set(this.commentInfo.data[index], 'isInput', !this.commentInfo.data[index].isInput)
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
    },
    // 提交评论、回复的数据
    async submitPlFn(type, item, index) {
      if(!isLogin()) return
      let text = '', creatUserId=''
      if(type === 'add'){
        text = this.plText
      }else if(type === 'hf'){
        text = this.fhText
        creatUserId = item.data[index].userId._id
      }
        const data = await addCommentRidicule({
        contentId: item.contentInfo[0]._id,
        commentContents: text,
        creatUserId
      })
      if (data.code === 200) {
        this.plText = ''
        this.fhText = ''
        this.getData()
        this.getCommentList(item.contentInfo[0]._id)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$mult-color-grey: #999; //辅助灰色，rgba(153, 153, 153, 1);
$mult-color-placeholder: #FC515F; // 强调文字颜色 rgba(252, 81, 95, 1)
$mult-color-tag-1: #FF8D1A; // rgba(255, 141, 26, 1);
$mult-color-tag-2: #3568F5; // rgba(53, 104, 245, 1);
$mult-color-tag-3: #00baad; // rgba(0, 186, 173, 1);
$mult-color-tag-4: #e05fe9;
$mult-color-tag-5: #e9615f;
$mult-color-tag-6: #6be95f;
$mult-color-tag-7: #1100ff;
.search {
  // border-bottom: 1px solid rgba(0, 186, 173, .6);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  .btns {
    display: flex;
    gap: 8px;
    font-size: 20px;
    .categoryOptions {
      padding: 2px 4px;
      border-radius: 3px;
      color: #333;
      cursor: pointer;
      margin-bottom: 20px;
      &.active {
        position: relative;
        font-weight: bold;
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-bottom-color: $mult-color-placeholder;
          position: absolute;
          bottom: -10px;
          left: calc(50% - 6px);
        }
      }
    }

  }
  .creatBtn {
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: #3568F5;
    }
  }
}


.PC-ridicule {
  width: 1200px;
  margin: 0px auto;
  // display: flex;
  // gap: 20px;
  .pageFy {
    margin-top: 20px;
  }
  .search {
    display: flex;
    gap: 10px;
    background: #fff;
    padding: 20px 30px 0 30px;
  }
  ul {
    background: #fff;
    padding: 20px;
    flex: 1;
    li {
      padding: 10px;
      // cursor: pointer;
      &:not(:last-child) {
        border-bottom: 1px dashed #EBEEF3;
      }
      &.active {
        border: 1px solid rgba(0, 186, 173, .6);
        border-radius: 8px;
      }
      &:hover {
        // border-top: 1px solid #f0f0f0;
        // border-bottom: 1px solid #f0f0f0;
        background: #f8f8fa;
        .title {
          color: #55a393;
        }
      }
      &.fixed {
        .content-bar-box {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          .content-bar {
            width: 1140px;
            background: #fff;
            padding: 15px 9px;
            box-shadow: 0 -1px 3px #ddd;
            .content-bar-left {
              .content-bar-item {
                font-size: 16px;
                font-weight: 600;
              }
              .content-bar-item {
                display: flex;
                align-items: center;
                gap: 6px;
              }
            }
            .content-bar-right {
              font-size: 16px;
              font-weight: 600;
              .more {
                color: #00baad;
              }
            }
          }
        }
      }
      .title{
        font-size: 20px;
        font-weight: 600;
        text-align: left;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .creatTime{
        color: #8491a5;
        font-size: 14px;
        margin-top: 10px
      }
      .content{
        font-size: 14px;
        line-height: 24px;
        text-indent: 2em;
        color: #191b1f;
        text-align: left;
        /deep/ img {
          max-width: 1000px;
          display: inline-block;
          // width: 100%;
        }
        // p {
        //   ::v-deep img {
        //     display: block;
        //     width: 100%;
        //   }
        // }
        .more{
          font-size: 14px;
          color: #09408e;
          cursor: pointer;
        }
      }
      .content-bar-box {
        font-weight: bold;
        .content-bar {
          display: flex;
          justify-content: space-between;
          padding: 10px 0px;
          .content-bar-left {
            display: flex;
            gap: 15px;
            align-items: center;
            .content-bar-item {
              font-size: 14px;
              color: #8491a5;
              cursor: pointer;
              margin-top: 5px;
              .iconfont{
                font-size: 14px !important;
                color: #8491a5;
                &.active {
                  color: #00baad;
                }
              }
              .icon{
                fill: #8491a5;
                &.active {
                  fill: #00baad;
                }
              }
              &:hover {
                color: rgba(0, 186, 173, .6);
                .iconfont{
                  font-size: 14px !important;
                  fill: rgba(0, 186, 173, .6);
                }
              }
              .icon{
                fill: #8491a5;
                &.active {
                  fill: #00baad;
                }
              }
            }
            
          }
          .content-bar-right {
            font-size: 14px;
            color: #8491a5;
            margin-top: 5px;
            display: flex;
            gap: 5px;
            align-items: center;
            .more {
                color: #00baad;
                cursor: pointer;
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
  .categoryOptions-item{
    font-size: 14px;
    color: #fff;
    display: flex;
    gap: 5px;
    .categoryOptions {
      padding: 2px 4px;
      border-radius: 3px;
      background: $mult-color-grey;
    }
    .categoryOptions1{
      background: $mult-color-tag-1;
    }
    .categoryOptions2{
      background: $mult-color-tag-5;
    }
    .categoryOptions3{
      background: $mult-color-tag-2;
    }
    .categoryOptions4{
      background: $mult-color-tag-4;
    }
    .categoryOptions5{
      background: $mult-color-tag-6;
    }
    .categoryOptions9{
      background: $mult-color-tag-7;
    }
    .categoryOptions7{
      background: $mult-color-placeholder;
    }
    .categoryOptions8{
      background: $mult-color-tag-3;
    }
    .categoryOptions10{
      background: #3a7e68;
    }
    .categoryOptions11{
      background: rgb(255, 150, 7);
    }
  }
  img {
    display: inline-block;
    // width: 100%;
  }
}
</style>
