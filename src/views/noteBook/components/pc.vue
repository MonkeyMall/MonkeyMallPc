<template>
  <div class="PC-ridicule">
    <div class="search">
      <div class="btns">
        <div
          :class="['categoryOptions', 'categoryOptions6', query.type === 0 ? 'active' : '']"
          @click="filterFn(0)">
          全部
        </div>
        <div
          v-if="isLogin"
          :class="['categoryOptions', 'categoryOptions6', query.type === 1 ? 'active' : '']"
          @click="filterFn(1)">
          我的
        </div>
        <div
          v-if="isLogin"
          :class="['categoryOptions', 'categoryOptions6', query.type === 2 ? 'active' : '']"
          @click="filterFn(2)">
          我的收藏
        </div>
      </div>
      <div class="creatBtn" @click="addNoteBookFn">
        <i class="iconfont">&#xe61f;</i>
        创建备忘录
      </div>
    </div>
    <!-- && collectList.length -->
    <ul class="web-left" v-if="list.length">
      <li v-for="(item, index) in list" 
        :key="index" 
        :class="[lookIndex === index ? 'active' : '', item.by < 0 && item.isShowMore ? 'fixed' : '']"
      >
       <div :ref="'p_' + index">
         <div class="title">
          <span v-if="!item.posted">待发布</span>
          {{ item.title }}
        </div> 
         <div :class="['content', item.isShowMore ? 'active' : '']">
           <div class="contents" v-highlight v-html="item.contents.length > 200 && !item.isShowMore ? item.contents.slice(0, 200) + '...' : item.contents"></div>
         </div>
        <div class="content-bar-box">
          <div class="content-bar">
            <div class="content-bar-left">
              <div class="content-bar-item startTime" @click="tapBarItem('pl', item._id, index)">
                发布于：<span v-time="item.startTime"></span>
              </div>
              <div v-if="query.type !== 2" class="content-bar-item" @click="collenctFn(item)">
                <i :class="['iconfont', collentTypeArr[index] ? 'active zoomIn animated' : '']">&#xe661;</i>
                  收藏
              </div>
              <div class="content-bar-item" @click="copyFn(item.contents, $event)">
                <i class="iconfont">&#xec7a;</i>
                  复制全部
              </div>
              <div v-if="query.type == 1" class="content-bar-item" @click="notebookStatusFn(item)">
                <i class="iconfont">&#xe994;</i>
                  {{!item.posted ? '全量发布' : '隐藏'}}
              </div>
            </div>
            <div class="content-bar-right">
              <span v-if="item.contents.length > 200" class="more" @click="moreFn(index)">{{!item.isShowMore ? '阅读全文' : '收起'}}</span>
              <i class="iconfont" v-if="item.contents.length > 200" v-show="!item.isShowMore">&#xe7a2;</i>
              <i class="iconfont" v-if="item.contents.length > 200" v-show="item.isShowMore">&#xe7a3;</i>
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
      <!-- <div v-if="collectList.length">
        <p>我的收藏</p>
        <li 
          v-for="(item, index) in collectList" 
          :key="index" 
          :class="[lookIndex === index ? 'active' : '', item.by < 0 && item.isShowMore ? 'fixed' : '']"
        >
         <div :ref="'pp_' + index">
           <div class="title">
            {{ item.title }}
          </div> 
           <div :class="['content', item.isShowMore ? 'active' : '']">
             <div class="contents" v-highlight v-html="item.notebookId.contents.length > 200 && !item.isShowMore ? item.notebookId.contents.slice(0, 200) + '...' : item.notebookId.contents"></div>
           </div>
          <div class="content-bar-box">
            <div class="content-bar">
              <div class="content-bar-left">
                <div class="content-bar-item startTime" @click="tapBarItem('pl', item.notebookId._id, index)">
                  发布于：<span v-time="item.notebookId.startTime"></span>
                </div>
                <div class="content-bar-item" @click="collenctFn(item.notebookId)">
                  <i :class="['iconfont', collentTypeArr[index] ? 'active zoomIn animated' : '']">&#xe661;</i>
                    收藏
                </div>
                <div class="content-bar-item" @click="copyFn(item.notebookId.contents, $event)">
                  <i class="iconfont">&#xec7a;</i>
                    复制全部
                </div>
              </div>
              <div class="content-bar-right">
                <span v-if="item.notebookId.contents.length > 200" class="more" @click="moreFn(index)">{{!item.isShowMore ? '阅读全文' : '收起'}}</span>
                <i class="iconfont" v-if="item.notebookId.contents.length > 200" v-show="!item.isShowMore">&#xe7a2;</i>
                <i class="iconfont" v-if="item.notebookId.contents.length > 200" v-show="item.isShowMore">&#xe7a3;</i>
              </div>
            </div>
          </div>
         </div>
        </li>
      </div> -->
    </ul>
    <empty v-else />
    <!-- <div class="web-right">
      <windowRight />
    </div> -->
    <!-- 评论右弹框 -->
    <el-dialog
      title="添加备忘录"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="contents">
            <editor v-model="ruleForm.contents" :min-height="192" />
          </el-form-item>
          <el-form-item label="是否发布" prop="posted">
            <el-select v-model="ruleForm.posted" placeholder="请选择是否发布">
              <el-option label="是" :value="1"></el-option>
              <el-option label="否" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <p class="tips">是：全部人可见；否：数据只有本人可见；</p>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="resetForm('ruleForm')">取 消</el-button> -->
        <el-button type="primary"  @click="submitForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  noteBookList,
  noteBookAdd,
  notebookCollent,
  getNoteBookIsCollent,
  noteBookCollenctList,
  notebookStatus
} from "@/api/index";
import {
  isLogin,
} from "@/utils/index";
import windowRight from "@/components/windowRight/windowRight";
import empty from "@/components/empty/index";
import pageNum from "@/components/pageNum/index.vue";
import { mapState, mapMutations } from "vuex";
import dictData from '@/utils/dictData.js'
import clip from '@/utils/clipboard'
import {
  getItem
} from '@/utils/storage.js'

var that = null;
export default {
  name: "NoteBook",
  components: {
    windowRight,
    empty,
    pageNum
  },
  data() {
    return {
      isLogin: getItem('userInfo'),
      categoryOptions: dictData.categoryOptions,
      list: [],
      collectList: [],
      dialogVisible: false,
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
        type: 0,
        reffer: 'pc'
      },
      ruleForm: {
        posted: '',
        title: '',
        contents: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          // { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
        ],
        contents: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        posted: [
          { required: true, message: '请选择是否发布', trigger: 'change' }
        ]
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
    ...mapState(['searchText', 'userInfo'])
  },
  watch: {
    
  },
  methods: {
    // 监听
    scrollItemToBottom(list, isCollect = false) {
      window.addEventListener('scroll', () => {
        for (let i = 0; i <= list.length; i++) {
          let [div] = this.$refs['p_' + i ]  // 特别注意这一行，赋值给了数组
          this.$set(this.list[i], 'by', window.innerHeight - div.getBoundingClientRect().bottom )
        }
      })
    },
    // 列表
    async getData() {
      let {data, count, collentTypeArr, collenctdata = []} = await noteBookList(this.query);
      console.log('noteBookList:', data)
      data.map(item =>{
        item.isShowMore = false
      })
      this.list = data || []
      this.collentTypeArr = collentTypeArr
      this.scrollItemToBottom(data)
      this.total = count || 0
    },
    // 收藏列表
    async getCollectListData() {
      this.query.page = 1
      let {data, count} = await noteBookCollenctList(this.query);
      console.log('noteBookList:', data)
      data.map(item =>{
        item.isShowMore = false
      })
      this.list = data || []
      this.scrollItemToBottom(data)
      this.total = count || 0
    },
    async copyFn(text, event) {
      clip(text, event)
    },
    // 点击阅读更多
    async moreFn(index) {
      this.lookIndex = index
      this.list.forEach((item, i) => {
        if(i === index){
          item.isShowMore = !item.isShowMore
        }else{
          item.isShowMore = false
        }
      })
    },
    tapBarItem(type,id, index) {
      this.lookIndex = index
      if(type === 'pl'){
        this.drawer = true
      }
      if(type === 'click'){
        this.moreFn(index)
      }
    },
    filterFn(val) {
      this.query.type = val
      if (val === 2) {
        this.getCollectListData()
      } else {
        this.getData()
      }
    },
    handleCurrentChange(val) {
      this.query.page = val
      this.getData()
    },
    // 收藏
    async collenctFn(item) {
      if(!isLogin()) return
      let data = await getNoteBookIsCollent({
        notebookId: item._id
      })
      if(data.message == '自己不能收藏自己的备忘录') {
        return this.$message({
          message: data.message,
          type: 'warning'
        })
      }
      // 还没有收藏
      let dataCollent = await notebookCollent({
        notebookId: item._id,
        type: data.isCollect ? 0 : 1 // 收藏类型 1 收藏 2 取消收藏
      })
      if (dataCollent.code === 200) {
        this.$message({
          message: data.isCollect ? '取消收藏成功' : '收藏成功',
          type: 'success'
        });
        this.getData()
      }
    },
    // 显示隐藏
    async notebookStatusFn(item) {
      if(!isLogin()) return
      let data = await notebookStatus({
        id: item._id,
        status: item.posted ? false : true
      })
      if (data.code === 200) {
        this.$message({
          message: '修改成功',
          type: 'success'
        });
        this.getData()
      }
    },
    handleClose(done) {
      done();
    },
    addNoteBookFn() {
      this.dialogVisible = true
    },
    async submitForm(formName) {
      console.log('add form:', this.ruleForm)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let { code } = await noteBookAdd(this.ruleForm)
          console.log('noteBookAdd:', code)
          if (code === 200) {
            this.$message({
              message: '添加成功',
              type: 'success'
            });
            this.dialogVisible = false
            this.resetForm(formName)
            this.getData()
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
::v-deep .ql-syntax {
  background: #313131;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fefefe;
  font-size: 12px;
}
.tips {
  font-size: 12px;
  color: #999;
  margin-top: 0;
  padding-left: 90px;
}

.PC-ridicule {
  width: 1200px;
  margin: 0px auto;
  // display: flex;
  // gap: 20px;
  .pageFy {
    margin-top: 20px;
  }
  ::v-deep .el-dialog {
    border-radius: 20px;
  }
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
                &.startTime {
                  font-size: 14px;
                }
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
        span {
          font-size: 12px;
          padding: 4px 6px;
          border-radius: 4px;
          background: #f0f0f0;
          font-weight: 0;
        }
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
