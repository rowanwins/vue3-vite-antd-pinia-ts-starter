<template>
  <ALayout
    :style="{
      minHeight: '100vh'
    }"
    has-sider
  >
    <ALayoutSider
      :class="{
        fixedSidebarWrapper: useFixedSidebar
      }"
      breakpoint="lg"
      collapsed-width="0"
      :width="sidebarWidth"
    >
      <Sidebar />
    </ALayoutSider>

    <ALayout
      :style="{
        marginLeft: useFixedSidebar ? `${sidebarWidth}px` : '0px'
      }"
    >
      <ALayoutContent id="mainContent">
        <slot name="heading" />

        <slot name="content" />
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import Sidebar from '@/components/Sidebar.vue'
import { usePageSizeStore } from '@/stores/pageSize'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Sidebar
  },
  data () {
    return {
      sidebarWidth: 250
    }
  },
  computed: {
    ...mapState(usePageSizeStore, ['currentPageSize']),
    useFixedSidebar (): boolean {
      if (
        this.currentPageSize === 'lg' ||
        this.currentPageSize === 'xl' ||
        this.currentPageSize === 'xxl') return true
      return false
    }
  }
})
</script>

<style lang="less">
@import '@/styles/theme.less';

#mainContent {
  padding: @sizingSet[xl] @sizingSet[xxl];
  background-color: @grey-100;
}

.fixedSidebarWrapper {
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
</style>
