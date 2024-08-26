<template>
  <div class="pageNum">
    <!-- @size-change="handleSizeChange" -->
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      layout="total, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "PageNum",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return{
      // currentPage: 1,
      // total: 0
    }
  },
  created() {
    
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: `, val);
      this.$emit('changePage', val)
    }
  }
};
</script>

<style lang="scss" scoped>
.pageNum {
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  background: #fff;
}
</style>
