<template>
  <div>

    <div class="PC-fixed-window" v-show="isShow">
      <div class="item special" @click="showOpen">
        <div class="container">
          <img class="icon" src="@/static/imgs/jy.png" alt="作者留言" />
          <p class="top-des">作者留言</p>
        </div>
      </div>
      <div class="item special" @click="toTop" id="top">
        <div class="container">
          <img class="icon" src="@/static/imgs/top.png" alt="返回顶部" />
          <p class="top-des">返回顶部</p>
        </div>
      </div>
    </div>
    <el-dialog
      title="留言"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div>
        <el-form :model="ruleForm" ref="ruleForm" label-width="0" class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input 
              type="textarea" 
              placeholder="请输入留言内容"
              :autosize="{ minRows: 8, maxRows: 12}"
              v-model="ruleForm.desc">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="liuyanAddFn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { onScroll } from "@/utils/deviceType";
import {
  liuyanAdd
} from "@/api/index";
export default {
  name: "FixedWindow",
  props: {
    pageType: {
      type: String,
      default: "other"
    },
    topShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      dialogVisible: false,
      ruleForm: {
        desc: ''
      }
    };
  },
  watch: {
    isShow: function(val, o) {
      // console.log('222', val, o)
      // const select = document.querySelectorAll(".special");
      // if (!val) {
      //   select[select.length - 1].className = "item special";
      //   select[select.length - 2].className = "item special last";
      // } else {
      //   select[select.length - 1].className = "item special last";
      //   select[select.length - 2].className = "item special";
      // }
      // $("#top").slideToggle();
    },
    topShow(v, o) {
      // console.log('111', v, o)
      // const select = document.querySelectorAll(".special");
      // if (v) {
      //   select[select.length - 1].className = "item special";
      //   select[select.length - 2].className = "item special last";
      // } else {
      //   select[select.length - 1].className = "item special last";
      //   select[select.length - 2].className = "item special";
      // }
      // $("#top").slideToggle();
    }
  },
  mounted() {
    let that = this;
    window.addEventListener("scroll", function() {
      that.isShow = onScroll(200);
    });
  },
  methods: {
    toTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    showOpen() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
    },
    async liuyanAddFn() {
      if (!this.ruleForm.desc) return this.$message.error('请输入留言内容')
      const {code} = await liuyanAdd(this.ruleForm)
      if (code !== 200) return
      this.$message.success('留言成功')
      this.dialogVisible = false
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-modal {
  z-index: 6;
}
.PC-fixed-window {
  // width: 40px;
  // height: 80px;
  position: fixed;
  z-index: 999;
  right: 50px;
  bottom: 100px;
  padding: 30px 20px;
  background: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  // &:hover {
  //   scale: 1.3;
  //   animation: 1s ease-in-out 0s infinite normal none running scale;
  // }
  .icon {
    width: 30px;
    height: 30px;
    &:hover {
      scale: 1.15;
    }
    // img {
    //   color: rgba(0, 0, 0, .4);
    // }
  }
  .top-des {
    font-size: 12px;
    // color: #333;
    color: rgba(0, 0, 0, .4);
  }
  .item {
    // width: 40px;
    // height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: #f5f6f9;
    // border-radius: 50%;
    // margin-bottom: 30px;
    // &:first-of-type {
    //   border-bottom: 1px solid red;
    // }
    &:hover {
      .top-des {
        color: rgba(0, 0, 0, .6);
      }
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
