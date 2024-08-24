<template>
	<div class="page-login">
    <div class="login-box">
      <div class="login-box-left">
        <p class="wec">微信小程序</p>
        <p class="des">打开微信扫码体验</p>
        <div class="qr-code">
          <img src="@/static/imgs/wechat.jpg" alt="">
        </div>
      </div>
      <div class="box">
        <p class="desc">猿猴宝宝社区，欢迎您</p>
        <div class="form">
          <el-form label-position="top" class="form">
            <el-form-item label="用户名">
              <input
                v-model="form.username"
                placeholder="请输入用户名"
                maxlength="20"
                type="text"
                :readonly="readonly"
                autocomplete="off"
                @focus="readonly = false"
              />
            </el-form-item>
  
            <el-form-item label="密码">
              <input
                v-model="form.password"
                type="password"
                placeholder="请输入密码"
                maxlength="20"
                autocomplete="off"
              />
            </el-form-item>
            <div class="op">
              <el-button type="primary" @click="loginFn"
                >登录</el-button
              >
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <p class="copyright">
      晋ICP备2024043727号
    </p>
	</div>
</template>

<script>
import {
  userLogin
} from "@/api/index";
import { mapState, mapMutations, mapActions } from "vuex";

var that = null;
export default {
  components: {
  },
  data() {
    return {
      readonly: false,
      form: {
        username: "songyanbin",
        password: "admin123",
      },
      list: []
    };
  },
  created() {
    // this.loginFn()
  },
  mounted() {},
  computed: {},
  methods: {
    ...mapActions(["user_login"]),
    async loginFn() {
      let data = await this.user_login(this.form);
      console.log('登录1', data)
      if (data.code == 200) {
        this.$router.push({ path: "/" });
      }
    },
    toLogin() {
    },
  }
};
</script>

<style lang="scss" scoped>
$color: #2c3142;

.page-login {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: relative;
	background-color: #b8e5f8;
  background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.47eec442.png);
  background-repeat: no-repeat;
  background-size: cover;
	color: $color;
  .login-box {
    height: 283px;
    display: flex;
    background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    .login-box-left {
      width: 300px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #eee;
      .wec {
        color: #373a40;
        font-size: 16px;
        font-weight: 600;
        line-height: 23px;
      }
      .des {
        margin-top: 8px;
        margin-bottom: 24px;
        color: #373a40;
        font-size: 14px;
        line-height: 20px;
      }
      .qr-code {
        width: 120px;
        height: 120px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .box {
      width: 300px;
      height: 100%;
      padding: 30px;
      font-size: 12px;
      .desc {
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 20px;
      }
      ::v-deep .el-form-item {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        .el-form-item__label {
          width: 50px;
          text-align: right;
          color: #666;
          margin-bottom: 0;
          padding: 0;
        }
        .el-form-item__content {
          flex: 1;
          display: flex;
          align-items: center;
          input {
            flex: 1;
            height: 20px; 
            line-height: 20px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
            outline: none;
            &:focus {
              border-color: #409eff;
            }
          }
        }
      }
      .op {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      ::v-deep .el-form-item__content input {
        flex: 1;
        height: 20px; 
        line-height: 20px;
      }
      ::v-deep .el-button {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
.copyright {
  position: absolute;
  bottom: 15px;
  left: 0;
  text-align: center;
  width: 100%;
  color: #666;
  font-size: 14px;
}
.custom-shape-divider-top-1724377286 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1724377286 svg {
    position: relative;
    display: block;
    width: calc(180% + 1.3px);
    height: 115px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1724377286 .shape-fill {
  fill: #c1e6f2;
}
</style>
