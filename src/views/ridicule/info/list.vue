<template>
	<CommonLayout :show-header="true">
    <template #header>
<!-- 筛选条件 -->
      <el-form
        :inline="true"
        :model="queryForm"
        class="demo-form-inline"
        @keyup.enter.native="goRouter">
        <el-form-item label="侃言名称：">
          <el-input v-model.trim="queryForm.name" placeholder="请输入侃言名称" />
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
        <el-table-column label="侃言内容" prop="contentId.content" />
        <el-table-column label="评论" prop="commentContents" />
        <el-table-column label="评论双方" prop="userId.username" width="180">
          <template #default="scope">
            <div v-if="scope.row.creatUserId">
              {{ scope.row.userId.username }} 回复 {{ scope.row.creatUserId.username }}
            </div>
            <div v-else>
              {{ scope.row.userId.username }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="startTime" width="180" />
        <el-table-column fixed="right" label="操作" width="170">
          <template #default="scope">
            <!-- <el-button link type="primary" size="small" @click="createFn('edit', scope.row)">
              编辑
            </el-button> -->
            <el-button link type="primary" size="small" @click="createFn('pl', scope.row)">评论</el-button>
            <!-- <el-button link type="primary" size="small" @click="openKyList(scope.row)">侃言评论</el-button> -->
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
        :title="isAdd === 1 ? '创建侃言' : isAdd === 2 ? '编辑侃言' : '侃言评论'"
        width="500"
        :before-close="handleClose"
      >
        <div>
          <div v-if="isAdd === 1 || isAdd === 2">
            <el-form :model="formAddOrEdit" label-width="120px">
              <el-form-item label="分类：">
                <el-input v-model="formAddOrEdit.category" placeholder="请输入分类" />
              </el-form-item>
              <el-form-item label="标题：">
                <el-input v-model="formAddOrEdit.title" placeholder="请输入标题" />
              </el-form-item>
              <el-form-item label="简介：">
                <el-input v-model="formAddOrEdit.description" type="textarea" placeholder="请输入简介" />
              </el-form-item>
              <el-form-item label="内容：">
                <el-input v-model="formAddOrEdit.contents" type="textarea" placeholder="请输入内容" />
              </el-form-item>
              <el-form-item label="是否发布：">
                <el-select
                  v-model="formAddOrEdit.posted"
                  clearable
                  placeholder="请选择是否发布">
                  <el-option
                    v-for="(item,index) in isOrYes"
                    :key="index"
                    :label="item.label"
                    :value="item.value" />
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div v-if="isAdd === 3">
            <el-form :model="formPl" label-width="120px">
              <el-form-item label="内容：">
                <el-input v-model="formPl.commentContents" type="textarea" placeholder="请输入评论内容" />
              </el-form-item>
            </el-form>
          </div>
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
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute();
import { 
  addRidicule, 
  editCompony, 
  listRidicule,
  addCommentRidicule,
  listCommentRidicule
} from "@/api/compony.js";
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
const tableData = reactive([])
const formAddOrEdit = reactive([
  {
    category: '',
    title: '',
    description: '',
    contents: '',
    posted: '',
  }
])
const formPl = ref([
  {
    contentId: '',//评论侃言的ID
    commentContents: '',//评论内容
    creatUserId: ''// 被评论人
  }
])
const isOrYes = [{
  label: '是',
  value: true
}, {
  label: '否',
  value: false
}]
const pageSize = ref(10)
const currentPage = ref(1)
const total = ref(0)
const dialogVisible = ref(false)
const isAdd = ref(1)
const editId = ref('')

// 点击创建或者编辑按钮
const createFn = (type, item) => {
  console.log('创建、编辑')
  if (type === 'add') {
    isAdd.value = 1
  } else if (type === 'edit') {
    isAdd.value = 2
    editId.value = item._id
    formAddOrEdit.category = item.category
    formAddOrEdit.description = item.description
    formAddOrEdit.contents = item.contents
    formAddOrEdit.posted = item.posted
  } else {
    isAdd.value = 3
    formPl.value.contentId = route.query.id
    formPl.value.creatUserId = item.userId._id
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
  if (isAdd.value === 1) {
    data = await addRidicule({
      category: formAddOrEdit.category,
      title: formAddOrEdit.title,
      description: formAddOrEdit.description,
      posted: formAddOrEdit.posted,
      contents: formAddOrEdit.contents,
    })
  } else if (isAdd.value === 2) {
    // data = await editCompony({
    //   id: editId.value,
    //   category: formAddOrEdit.category,
    //   title: formAddOrEdit.title,
    //   description: formAddOrEdit.description,
    //   posted: formAddOrEdit.posted,
    //   contents: formAddOrEdit.contents,
    // })
  } else {
    data = await addCommentRidicule({
      contentId: formPl.value.contentId,
      commentContents: formPl.value.commentContents,
      creatUserId: formPl.value.creatUserId
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
  const data = await listCommentRidicule({
    contentId: route.query.id || '',
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