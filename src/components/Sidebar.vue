<template>
  <ARow id="sidebar">
    <ACol :span="24">
      <ARow
        class="marginBottom-lg"
        style="padding-left: 20px;"
      >
        <a>
          My app
        </a>
      </ARow>
    </ACol>
  </ARow>
</template>

<style lang="less">
@import '@/styles/theme.less';

.ant-layout-sider {
  background-color: @grey-200;
}

#sidebar {
  background-color: @grey-200;
  height: 100%;
  border-right: 2px solid fade(@grey-300, 10%);
  padding: @sizingSet[xl] 0px;
}
</style>