<template>
  <MainLayout/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePageSizeStore } from '@/stores/pageSize'
import MainLayout from '@/layouts/main.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout
  },
  async mounted () {
    const pageSizeStore = usePageSizeStore()
    window.addEventListener('resize', () => {
      pageSizeStore.calcPageWidth()
    }, true)
    pageSizeStore.calcPageWidth()
  }
})
</script>

<style lang="less">
@import '@/styles/theme.less';

html, body {
  height: 100%;
  margin: 0px;
}

#app {
  min-height: 100%;
  height: auto!important;
  background: @grey-100;
}

.ant-layout-sider, .ant-layout {
  background: @grey-600;
}
</style>
