<template>
	<CommonLayout :show-header="true">
    <template #header>
<!-- 筛选条件 -->
      <el-form
        :inline="true"
        :model="queryForm"
        class="demo-form-inline"
        @keyup.enter.native="goRouter">
        <el-form-item label="公司名称：">
          <el-input v-model.trim="queryForm.name" placeholder="请输入公司名称" />
        </el-form-item>
        <!-- <el-form-item label="当前顺序：">
          <el-select
            v-model="query.hotSortNum"
            clearable
            placeholder="请选择帖子顺序">
            <el-option
              v-for="(item,index) in 30"
              :key="index"
              :label="item"
              :value="item" />
          </el-select>
        </el-form-item> -->
        <el-form-item>
          <el-button
            type="primary"
            @click="goRouter">搜索</el-button>
          <el-button @click="resetFn">重置</el-button>
        </el-form-item>
      </el-form>
      <div style="padding-bottom: 20px;">
        <el-button type="primary" size="default" @click="createFn('add')">新建</el-button>
      </div>
    </template>
    <template #body>
<!-- 表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="公司名" prop="name" width="180" />
        <el-table-column label="位置" prop="address" width="180" />
        <el-table-column label="行业" prop="industry" width="180" />
        <el-table-column label="规模" prop="scale" width="180" />
        <el-table-column label="五险" prop="insurance" width="180" />
        <el-table-column label="公积金" prop="accumulation" width="180" />
        <el-table-column label="福利" prop="welfare" width="180" />
        <el-table-column label="创建时间" prop="startTime" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="createFn('edit', scope.row)">
              编辑
            </el-button>
            <!-- <el-button link type="primary" size="small">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
<!-- 分页 -->
      <div style="margin-top: 25px;display: flex;justify-content: center;align-items: center;">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
<!-- 创建弹窗 -->
      <el-dialog
        v-model="dialogVisible"
        :title="isAdd ? '创建公司' : '编辑公司'"
        width="500"
        :before-close="handleClose"
        >
        <div>
          <el-form :model="formAddOrEdit" label-width="120px">
            <el-form-item label="公司名：">
              <el-input v-model="formAddOrEdit.name" placeholder="请输入公司名" />
            </el-form-item>
            <el-form-item label="logo：">
              <el-input v-model="formAddOrEdit.logo" placeholder="请输入公司logo" />
            </el-form-item>
            <el-form-item label="融资情况：">
              <el-select
                v-model="formAddOrEdit.financing"
                clearable
                placeholder="请选择融资情况">
                <el-option
                  v-for="(item,index) in financingOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="薪资：">
              <el-input v-model="formAddOrEdit.wage" placeholder="请输入薪资范围" />
            </el-form-item>
            <el-form-item label="技术要求：">
              <el-input v-model="formAddOrEdit.technical" type="textarea" placeholder="请输入技术要求" />
            </el-form-item>
            <el-form-item label="地址：">
              <el-input v-model="formAddOrEdit.address" placeholder="请输入公司地址" />
            </el-form-item>
            <el-form-item label="行业：">
              <el-input v-model="formAddOrEdit.industry" placeholder="请输入公司行业" />
            </el-form-item>
            <el-form-item label="规模：">
              <el-select
                v-model="formAddOrEdit.scale"
                clearable
                placeholder="请选择规模人数">
                <el-option
                  v-for="(item,index) in scaleList"
                  :key="index"
                  :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="五险：">
              <el-select
                v-model="formAddOrEdit.insurance"
                clearable
                placeholder="请选择规模人数">
                <el-option
                  v-for="(item,index) in isOrYes"
                  :key="index"
                  :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="公积金：">
              <el-select
                v-model="formAddOrEdit.accumulation"
                clearable
                placeholder="请选择规模人数">
                <el-option
                  v-for="(item,index) in isOrYes"
                  :key="index"
                  :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
            <el-form-item label="福利：">
              <el-input v-model="formAddOrEdit.welfare" type="textarea" placeholder="请输入公司福利" />
            </el-form-item>
          </el-form>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="submitFormFn">
              提交
            </el-button>
          </div>
        </template>
      </el-dialog>
    </template>
  </CommonLayout>
</template>
<script setup>
import { addCompony, editCompony, listCompony } from "@/api/compony.js";
import CommonLayout from '@/components/CommonLayout'
// import Editor from "../components/Editor.vue";
// import { ref } from "vue";
// const detail = ref({});

// detail.value = "富文本编辑器测试输入";
// // 创建成功
// const onSuccess = () => {
// 	console.log("onSuccess");
// };

import { reactive, ref, toRefs } from 'vue'
const queryForm = ref({
  name: ''
})

const goRouter = () => {
  console.log('goRouter')
  getList('refash')
}

const resetFn = () => {
  console.log('resetFn')
}
const tableData = reactive([])
const formAddOrEdit = reactive([
  {
    name: '', // 公司名
    logo: '',
    industry: '', // 行业
    scale: '', // 规模
    accumulation: '', // 公积金
    insurance: '', // 五险
    welfare: '', // 福利
    address: '', // 位置
    financing: '',
    wage: '',
    technical: ''
  }
])
const scaleList = [{
  label: '100-500人',
  value: '100-500人'
}, {
  label: '500-1000人',
  value: '500-1000人'
}, {
  label: '1000-5000人',
  value: '1000-5000人'
}]
const isOrYes = [{
  label: '是',
  value: '1'
}, {
  label: '否',
  value: '0'
}]
const financingOptions = [{
  label: '天使轮',
  value: '1'
}, {
  label: 'A轮',
  value: '2'
}, {
  label: 'B轮',
  value: '3'
}, {
  label: 'C轮',
  value: '4'
}, {
  label: 'D轮',
  value: '5'
}, {
  label: 'E轮',
  value: '6'
}, {
  label: 'IPO',
  value: '7'
}]
const pageSize = ref(10)
const currentPage = ref(1)
const total = ref(0)
import { ElMessageBox } from 'element-plus'
const dialogVisible = ref(false)
const isAdd = ref(true)
const editId = ref('')
// 点击创建或者编辑按钮
const createFn = (type, item) => {
  console.log('创建、编辑')
  if (type === 'add') {
    isAdd.value = true
    editId.value = ''
    formAddOrEdit.name = '' // 公司名
    formAddOrEdit.logo = ''
    formAddOrEdit.industry = '' // 行业
    formAddOrEdit.scale = '' // 规模
    formAddOrEdit.accumulation = '' // 公积金
    formAddOrEdit.insurance = '' // 五险
    formAddOrEdit.welfare = '' // 福利
    formAddOrEdit.address = '' // 位置
    formAddOrEdit.financing = ''
    formAddOrEdit.wage = ''
    formAddOrEdit.technical = ''
  } else {
    isAdd.value = false
    editId.value = item._id
    formAddOrEdit.name = item.name // 公司名
    formAddOrEdit.logo = item.logo
    formAddOrEdit.industry = item.industry // 行业
    formAddOrEdit.scale = item.scale // 规模
    formAddOrEdit.accumulation = item.accumulation // 公积金
    formAddOrEdit.insurance = item.insurance // 五险
    formAddOrEdit.welfare = item.welfare // 福利
    formAddOrEdit.address = item.address // 位置
    formAddOrEdit.financing = item.financing
    formAddOrEdit.wage = item.wage
    formAddOrEdit.technical = item.technical
  }
  dialogVisible.value = true
}

const handleSizeChange = (val) => {
  console.log('handleSizeChange', val)
}
const handleCurrentChange = (val) => {
  console.log('handleCurrentChange', val)
}

// 关闭弹框
const handleClose = () => {
  dialogVisible.value = false
}
// 修改或者编辑
const submitFormFn = async () => {
  let data
  if (isAdd.value) {
    data = await addCompony({
      name: formAddOrEdit.name, // 公司名
      logo: formAddOrEdit.logo,
      industry: formAddOrEdit.industry, // 行业
      scale: formAddOrEdit.scale, // 规模
      accumulation: formAddOrEdit.accumulation, // 公积金
      insurance: formAddOrEdit.insurance, // 五险
      welfare: formAddOrEdit.welfare, // 福利
      address: formAddOrEdit.address, // 位置
      financing: formAddOrEdit.financing,
      wage: formAddOrEdit.wage,
      technical: formAddOrEdit.technical
    })
  } else {
    data = await editCompony({
      id: editId.value,
      name: formAddOrEdit.name, // 公司名
      logo: formAddOrEdit.logo,
      industry: formAddOrEdit.industry, // 行业
      scale: formAddOrEdit.scale, // 规模
      accumulation: formAddOrEdit.accumulation, // 公积金
      insurance: formAddOrEdit.insurance, // 五险
      welfare: formAddOrEdit.welfare, // 福利
      address: formAddOrEdit.address ,// 位置
      financing: formAddOrEdit.financing,
      wage: formAddOrEdit.wage,
      technical: formAddOrEdit.technical
    })
  }
  console.log('data', data)
  if (data.code === 200) {
    getList('refash')
    dialogVisible.value = false
  }
}
// 获取列表
const getList = async (type) => {
  if (type === 'refash') {
    console.log('重置刷新')
  }
  const data = await listCompony({
    name: queryForm.value.name || '',
    limte: 10,
    page: 1
  })
  console.log('list', data)
  tableData.length = 0
  tableData.push(...data.data)
  total.value = data.count
  return {
    ...toRefs(tableData)
  }
}
getList()
</script>