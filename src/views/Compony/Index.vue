<template>
  <ContainerLayout :isHeader="true" :isFooter="true" :swi="!isMobile()">
    <template slot="main">
      <MB v-if="isMobile()"></MB>
      <PC v-else></PC>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import PC from "./components/pc";
import MB from "./components/mb";
export default {
  name: "About",
  components: {
    ContainerLayout,
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
