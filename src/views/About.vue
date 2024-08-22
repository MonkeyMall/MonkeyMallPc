<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <MB v-if="isMobile()" :list="list"></MB>
      <PC v-else :list="list"></PC>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import PC from "./components/pc";
import MB from "./components/mb";
import {banner} from '@/api/banner'
export default {
  name: "Home",
  components: {
    ContainerLayout,
    PC,
    MB
  },
  data() {
    return {
      map: new Map ([
          ['zh', 1],
          ['en', 2]
      ]),
      list: []
    };
  },
  created() {
    this.onBannerList()
  },
  mounted() {},
  computed: {},
  methods: {
    async onBannerList() {
      const params = {
        platform: this.isMobile() ? 'mb' : 'pc',
        language: this.map.get(this.lang)
      }
      const {code,data} = await banner(params)
      console.log(code,data)
      if(code === 1) {
        this.list = data
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
