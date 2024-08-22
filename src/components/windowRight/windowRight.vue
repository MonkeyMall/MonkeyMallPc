<template>
  <div>
    <div class="login">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0" class="login-loginForm">
        <el-form-item prop="name">
          <el-input v-model="loginForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div @click="submitForm('loginForm')" class="submit">登录</div>
    </div>
  </div>
</template>

<script>
import {
  companyList
} from "@/api/banner";
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "WindowRight",
  components: {},
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    
  },
  mounted() {},
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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
.login {
  padding: 10px;
  border: 1px solid #efefef;
  .submit {
    width: 100%;
    line-height: 40px;
    text-align: center;
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>
