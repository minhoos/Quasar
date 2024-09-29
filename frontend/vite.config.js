import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: resolve(__dirname, 'src/styles/quasar-variables.scss')
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),  // '@'를 src 폴더로 매핑
    }
  },
  server:{
    watch:{
      // 소스 수정되었을때 바로 반영되도록 적용
      usePolling:true,
    }
  },
  css :{
    preprocessorOptions : {
      scss: {
        api: "modern",
      }        
    } 
  }

})
