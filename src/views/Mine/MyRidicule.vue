<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <div class="PC-mine">
        <div class="user-info">
          <img src="@/static/imgs/logo.png">
          <div class="user-name">{{ userInfo.username }}</div>
        </div>
        <div class="mine-list">
          <myRidiculePc />
        </div>
      </div>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import myRidiculePc from "./components/myRidiculePc";
import { getItem } from "@/utils/storage";

export default {
  name: "Mine",
  components: {
    ContainerLayout,
    myRidiculePc,
  },
  data() {
    return {
      userInfo: getItem('userInfo'),
    };
  },
  created() {
  },
  mounted() {},
  computed: {},
  methods: {
    
  }
};
</script>
<style lang="scss" scoped>
.PC-mine {
  width: 1200px;
  margin: 0px auto;
  display: flex;
  gap: 20px;
  .user-info {
    width: 150px;
    height: 150px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .user-name {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
  }
  .mine-list {
    flex: 1;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}
  
</style>
