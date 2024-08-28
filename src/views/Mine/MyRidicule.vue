<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <PC></PC>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import PC from "./components/myRidiculePc";
export default {
  name: "Mine",
  components: {
    ContainerLayout,
    PC,
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
