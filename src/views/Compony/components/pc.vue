<template>
  <div>
    <div class="componyTitle">
      <p class="componyTitle-title">{{ info.name }}</p>
    </div>
    <div class="compony">
      <p class="label-title">基础信息</p>
      <div class="label-content">
        <ul class="business-detail-box">
          <li class="business-detail-name">
            <span class="t">企业名称：</span>
            {{ info.name }}
          </li>
          <li class="business-detail-name">
            <span class="t">规模：</span>
            {{ info.scale || '--' }}
          </li>
          <li class="business-detail-name">
            <span class="t">所在地区：</span>
            {{ info.pAcText + info.address || '--' }}
          </li>
          <li class="business-detail-name">
            <span class="t">五险：</span>
            {{ info.accumulation === '1' ? '有' : '无'}}
          </li>
          <li class="business-detail-name">
            <span class="t">一金：</span>
            {{ info.insurance === '1' ? '有' : '无' }}
          </li>
          <li class="business-detail-name">
            <span class="t">官网：</span>
            {{ info.website || '--' }}
          </li>
          <li class="business-detail-name">
            <span class="t">注册资本：</span>
            {{ info.registeredCapital || '--' }}
          </li>
          <li class="business-detail-name">
            <span class="t">注册地址：</span>
            {{ info.addressZc || '--' }}
          </li>
          <li class="business-detail-name">
            <span class="t">其他：</span>
            <span v-if="info.overTime" class="item-cons-btn" v-for="(item, index) in info.overTime.split(',')" :key="index">{{ dictHx(item, 'overTimeOptions') }}</span>
            <span v-else class="item-cons-btn">--</span>
          </li>
        </ul>
      </div>
      <p class="label-title mt-30" v-if="info.welfare.length">人才发展</p>
      <ul class="company-talents-list" v-if="info.welfare.length">
        <li v-for="(item, index) in info.welfare.split(',')" :key="index">
          {{ dictHx(item, 'welfareOptions') }}
        </li>
      </ul>
    </div>
    <div class="empty">
      <div class="label-title">
        <span>工作感受</span>
        <div class="addMessage" @click="addPlFn()">我也来发表</div>
      </div>
      <ul class="company-ganshou" v-if="componyCommentList.length">
        <li v-for="(item, index) in componyCommentList" :key="index">
          <div class="usrname">
            <img
              src="@/static/imgs/logo.png"
              mode="scaleToFill"
            />
            {{ item.userId.username }}
          </div>
          <div class="usrtext">{{ item.componyContents}}</div>
        </li>
      </ul>
      <div class="empty-box" v-else>
        <div>暂无工作感受，快来加入评论吧！</div>
        <div class="joinMessageBtn" @click="addPlFn()">工作感受</div>
      </div>
    </div>
    <el-dialog
      title="工作感受"
      :visible.sync="dialogVisible"
      width="700px"
      :before-close="handleClose">
      <div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 10, maxRows: 10}"
          :placeholder="'请输入您对 ' + info.name + ' 的感受'"
          maxlength="200"
          v-model="form.componyContents">
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitCommentsComponyAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getComponyInfo,
  getCommentsComponyList,
  setCommentsComponyAdd
} from "@/api/index";
import {
  dictHx,
  usernameFormat
} from '@/utils/index.js'
import windowRight from "@/components/windowRight/windowRight";
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "AboutPc",
  components: {
    windowRight
  },
  data() {
    return {
      componyCommentList: [],
      info: null,
      dialogVisible: false,
      form: {
        componyId: '',
        componyContents: ''
      }
    };
  },
  created() {
    this.id = this.$route.query.id
    this.form.componyId = this.$route.query.id
    this.getList()
    this.getComponyCommentListFn()
  },
  mounted() {},
  computed: {},
  methods: {
    dictHx,
    usernameFormat,
    // 公司详情
    async getList(obj) {
      const data = await getComponyInfo({
        id: this.id,
        limte: 10,
        page: 1
      })
      this.info = data.data
    },
    // 获取公司的评论列表
    async getComponyCommentListFn() {
      const data = await getCommentsComponyList({
        page: 1,
        componyId: this.id
      })
      this.componyCommentList = data.data || []
    },
    // 添加公司的评论
    async submitCommentsComponyAdd() {
      if (!this.form.componyContents) {
        this.$message.error('请输入工作感受')
        return
      }
      const {code} = await setCommentsComponyAdd(this.form)
      if (code === 200) {
        // this.$message.success('评论成功')
        this.dialogVisible = false
        this.form.componyContents = ''
        this.getComponyCommentListFn()
      }
    },
    addPlFn() {
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    }
  }
};
</script>

<style lang="scss" scoped>
.label-title {
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  .addMessage {
    font-size: 14px;
    color: #999999;
    cursor: pointer;
    padding: 5px 10px;
    background: #f8f8f8;
    border-radius: 8px;
    &:hover {
      color: #fff;
      background: #ff6600;
    }
  }
}
.mt-30 {
  margin-top: 30px;
}
.componyTitle {
  width: 1200px;
  margin: 80px auto 0;
  background: #fff;
  padding: 20px 30px;
  .componyTitle-title {
    font-size: 24px;
    font-weight: 600;
    color: #333333;
  }
}
.compony {
  width: 1200px;
  margin: 30px auto 0;
  background: #fff;
  padding: 30px;
  .label-content {
    position: relative;
    border-radius: 12px;
    border: none;
    background: #f8f8f8;
    padding: 20px;
    height: auto;
    .business-detail-box {
      display: flex;
      flex-wrap: wrap;
      max-width: 100%; /* 确保容器宽度不超过其父元素宽度 */
      .business-detail-name {
        flex: 0 0 33.3333%; /* 每个item占据100% / 3 */
        max-width: 100%; /* 确保item宽度不超过容器宽度 */
        font-size: 15px;
        color: #333;
        line-height: 21px;
        margin-bottom: 30px;
        .t {
          display: block;
          font-size: 14px;
          color: #999;
          line-height: 20px;
          margin-bottom: 8px;
        }
      }
    }
  }
  
  .company-talents-list {
    overflow: hidden;
    margin-top: 20px;
    li {
      float: left;
      background: #f8f8f8;
      border-radius: 4px;
      padding: 4px 12px;
      font-size: 14px;
      color: #666;
      line-height: 20px;
      margin-right: 8px;
      margin-bottom: 12px;
    }
  }
}
.empty{
  width: 1200px;
  margin: 30px auto;
  background: #fff;
  padding: 30px;
  .company-ganshou {
    .usrname {
      font-size: 14px;
      color: #333;
      line-height: 20px;
      margin-bottom: 8px;
      display: flex;
      gap: 10px;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .usrtext {
      font-size: 14px;
      color: #666;
      line-height: 20px;
      background: #f8f8f8;
      padding: 10px;
      margin-left: 50px;
    }
  }
  .empty-box {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #999;
    gap: 20px;
    .joinMessageBtn {
      width: 150px;
      line-height: 40px;
      text-align: center;
      border-radius: 40px;
      background: #2bc7a0;
      color: #fff;
    }
  }
}
</style>
