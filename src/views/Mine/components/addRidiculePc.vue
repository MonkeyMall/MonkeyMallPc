<template>
  <div class="addRidiculePc">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-select v-model="ruleForm.category" placeholder="请选择分类">
          <el-option :label="item.label" :value="item.value" v-for="(item, index) in categoryOptions" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介" prop="description">
        <el-input type="textarea" v-model="ruleForm.description" placeholder="请输入简介"></el-input>
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
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">创建调侃</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  addRidicule
} from "@/api/index";
import windowRight from "@/components/windowRight/windowRight";
import dictData from '@/utils/dictData.js'
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "AddRidiculePc",
  components: {
    windowRight
  },
  data() {
    return {
      categoryOptions: dictData.categoryOptions,
      list: [],
      ruleForm: {
        posted: '',
        category: '',
        description: '',
        title: '',
        contents: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          // { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '请选择分类', trigger: 'change' }
        ],
        description: [
          { required: true, message: '请输入简介', trigger: 'blur' },
          // { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
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
  },
  mounted() {},
  computed: {},
  methods: {
    async submitForm(formName) {
      console.log('add form:', this.ruleForm)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let { code } = await addRidicule(this.ruleForm)
          if (code === 200) {
            this.$router.push('/ridicule')
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
.addRidiculePc {
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
