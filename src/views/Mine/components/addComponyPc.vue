<template>
  <div class="addComponyPc">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="name">
        <el-select v-model="ruleForm.region" placeholder="请选择分类">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入简介"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="desc">
        <editor v-model="ruleForm.questionText" :min-height="192" />
      </el-form-item>
      <el-form-item label="是否发布" prop="name">
        <el-select v-model="ruleForm.region" placeholder="请选择是否发布">
          <el-option label="是" value="shanghai"></el-option>
          <el-option label="否" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">创建公司</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  companyList
} from "@/api/index";
import windowRight from "@/components/windowRight/windowRight";
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "AddComponyPc",
  components: {
    windowRight
  },
  data() {
    return {
      list: [],
      ruleForm: {
        name: '',
        region: '',
        desc: '',
        questionText: ''
      }
    };
  },
  created() {
    this.getData()
  },
  mounted() {},
  computed: {},
  methods: {
    async getData() {
      let {data} = await companyList();
      this.list = data || []
      console.log('list:', data);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
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
.addComponyPc {
  width: 1200px;
  margin: 80px auto;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  .el-form {
    width: 800px;
    margin: 0 auto;
  }
}
</style>
