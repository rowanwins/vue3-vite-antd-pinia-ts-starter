import { defineStore } from 'pinia'

export const usePageSizeStore = defineStore('pageSize', {
  state: () => ({
    pageWidth: 0
  }),
  actions: {
    calcPageWidth () {
      // @ts-ignore
      this.pageWidth = document.getElementById('app').clientWidth
    }
  },
  getters: {
    currentPageSize (state) {
      const width = state.pageWidth
      if (width < 576) return 'xs'
      if (width >= 1600) return 'xxl'
      if (width >= 1200) return 'xl'
      if (width >= 992) return 'lg'
      if (width >= 786) return 'md'
      return 'sm'
    }
  }
})
