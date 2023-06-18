import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          importLess: true
        })
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 'primary-color': '#596F5B',
          // 'secondary-color': '#FF9839',
          // 'warning-color': '#FF9839',
          // 'error-color': '#E98172',
          // 'success-color': '#455F4C',
          // 'info-color': '#1890ff',
          // 'font-size-base': '15px',
          // 'text-color': '#596F5B',
          'border-radius-base': '4px',
          'font-family': 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('/src')
    }
  },
  build: {
    cssCodeSplit: false
  }
})
