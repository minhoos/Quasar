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
  css :{
    preprocessorOptions : {
      scss: {
        api: "modern",
      }        
    } 
  }

})
