<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <!-- <ToolBar></ToolBar> -->
      <MB v-if="isMobile()"></MB>
      <PC v-else></PC>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import ToolBar from "@/components/toolbar";
import PC from "./components/pc";
import MB from "./components/mb";
export default {
  name: "Home",
  components: {
    ContainerLayout,
    ToolBar,
    PC,
    MB
  },
  data() {
    return {
      
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
<style lang="scss" scoped></style>
