<template>
	<CommonLayout :show-header="true">
    <template #header>
<!-- 筛选条件 -->
      <el-form
        :inline="true"
        :model="queryForm"
        class="demo-form-inline"
        @keyup.enter.native="goRouter">
        <el-form-item label="用户名称：">
          <el-input v-model.trim="queryForm.name" placeholder="请输入用户名称" />
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
      <!-- <div style="padding-bottom: 20px;">
        <el-button type="primary" size="default" @click="createFn('add')">新建</el-button>
      </div> -->
    </template>
    <template #body>
<!-- 表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="用户名" prop="name" />
        <el-table-column label="会员" prop="isVip"/>
        <el-table-column label="创建时间" prop="date" />
        <!-- <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="createFn('edit')">
              编辑
            </el-button>
          </template>
        </el-table-column> -->
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
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
<!-- 创建弹窗 -->
      <el-dialog
        v-model="dialogVisible"
        :title="isAdd ? '创建用户' : '编辑用户'"
        width="500"
        :before-close="handleClose"
        >
        <div>
          <el-form :model="formAddOrEdit" label-width="120px">
            <el-form-item label="用户名：">
              <el-input v-model="formAddOrEdit.name" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="logo：">
              <el-input v-model="formAddOrEdit.name" placeholder="请输入用户logo" />
            </el-form-item>
            <el-form-item label="地址：">
              <el-input v-model="formAddOrEdit.address" placeholder="请输入用户地址" />
            </el-form-item>
            <el-form-item label="行业：">
              <el-input v-model="formAddOrEdit.industry" placeholder="请输入用户行业" />
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
              <el-input v-model="formAddOrEdit.welfare" type="textarea" placeholder="请输入用户福利" />
            </el-form-item>
          </el-form>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              提交
            </el-button>
          </div>
        </template>
      </el-dialog>
    </template>
  </CommonLayout>
</template>
<script setup>
import { 
  listUser
} from "@/api/compony.js"
import CommonLayout from '@/components/CommonLayout'
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
const formAddOrEdit = [
  {
    name: '', // 用户名
    isVip: '', // 行业
  }
]
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
const pageSize = ref(10)
const currentPage = ref(1)
const total = ref(0)
import { ElMessageBox } from 'element-plus'
const dialogVisible = ref(false)
const isAdd = ref(true)


const createFn = (type) => {
  console.log('创建、编辑')
  if (type === 'add') {
    isAdd.value = true
  } else {
    isAdd.value = false
  }
  dialogVisible.value = true
}

const handleSizeChange = (val) => {
  console.log('handleSizeChange', val)
}
const handleCurrentChange = (val) => {
  console.log('handleCurrentChange', val)
}

const handleClose = () => {
  dialogVisible.value = false
}
// 获取列表
const getList = async (type) => {
  if (type === 'refash') {
    console.log('重置刷新')
  }
  const data = await listUser({
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