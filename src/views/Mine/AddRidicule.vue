<template>
  <ContainerLayout :isHeader="true" :isFooter="true">
    <template slot="main">
      <PC></PC>
    </template>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from "@/components/containerComponent";
import PC from "./components/addRidiculePc";
import {banner} from '@/api/index'
export default {
  name: "Mine",
  components: {
    ContainerLayout,
    PC,
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
