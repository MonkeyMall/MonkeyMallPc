<template>
	<CommonLayout :show-header="true">
    <template #header>
<!-- 筛选条件 -->
      <el-form
        :inline="true"
        :model="queryForm"
        class="demo-form-inline"
        @keyup.enter.native="goRouter">
        <el-form-item label="订单名称：">
          <el-input v-model.trim="queryForm.name" placeholder="请输入订单名称" />
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
        <el-table-column label="订单ID" prop="orderId" />
        <el-table-column label="商品" prop="shoppingName" />
        <el-table-column label="购买人" prop="name"/>
        <el-table-column label="购买时间" prop="date" />
        <el-table-column label="订单金额" prop="price" />
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
        :title="isAdd ? '创建订单' : '编辑订单'"
        width="500"
        :before-close="handleClose"
        >
        <div>
          <el-form :model="formAddOrEdit" label-width="120px">
            <el-form-item label="订单名：">
              <el-input v-model="formAddOrEdit.name" placeholder="请输入订单名" />
            </el-form-item>
            <el-form-item label="logo：">
              <el-input v-model="formAddOrEdit.name" placeholder="请输入订单logo" />
            </el-form-item>
            <el-form-item label="地址：">
              <el-input v-model="formAddOrEdit.address" placeholder="请输入订单地址" />
            </el-form-item>
            <el-form-item label="行业：">
              <el-input v-model="formAddOrEdit.industry" placeholder="请输入订单行业" />
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
              <el-input v-model="formAddOrEdit.welfare" type="textarea" placeholder="请输入订单福利" />
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
<script lang="ts" setup>
import CommonLayout from '@/components/CommonLayout'
// import Editor from "../components/Editor.vue";
// import { ref } from "vue";
// const detail = ref({});

// detail.value = "富文本编辑器测试输入";
// // 创建成功
// const onSuccess = () => {
// 	console.log("onSuccess");
// };

import { reactive, ref } from 'vue'
const queryForm = reactive({
  name: ''
})
console.log('queryForm', queryForm)

const goRouter = () => {
  console.log('goRouter')
}

const resetFn = () => {
  console.log('resetFn')
}
const tableData = [
  {
    date: '2016-05-03',
    name: '张淼',
    orderId: '142327892829',
    price: 100,
    shoppingName: '手机支架'
  }
]
const formAddOrEdit = [
  {
    name: '',
    orderId: '',
    price: 0,
    shoppingName: ''
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


const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>