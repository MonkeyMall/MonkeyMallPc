<template>
  <div class="about">
    关于我们
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
  name: "AboutPc",
  components: {
    windowRight
  },
  data() {
    return {
      list: []
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
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  width: 1200px;
  margin: 80px auto;
  display: flex;
  gap: 20px;
}
</style>
