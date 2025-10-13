import {
  defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import config from './src/common/config'
import { resolve } from 'path';
import AutoImport from "unplugin-auto-import/vite"
// import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

export default defineConfig(async () => {
  return {
    plugins: [
      uni(),
      // vue(),
      AutoImport({
        resolvers: [VantResolver()],
        imports: ['vue', 'uni-app'],
      }), Components({
        resolvers: [VantResolver()],
      }),],
    server: {
      host: "localhost", // 指定服务器应该监听哪个IP地址,默认：localhost
      port: 5173, // 指定开发服务器端口,默认：5173
      proxy: { // 为开发服务器配置自定义代理规则
        // 带选项写法：http://localhost:5173/api/posts -> http://jsonplaceholder.typicode.com/posts
        "/api": {
          target: config.baseUrl, // 目标接口
          changeOrigin: true, // 是否换源
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
      },
    }
  }
});