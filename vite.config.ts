import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'
import { visualizer } from 'rollup-plugin-visualizer'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve as resolves } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({//按需引入
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
          // style: (name) => [`antd/lib/style/index.less`, `antd/lib/${name}/style/index.less`],
        },
      ],
    }),
    visualizer({//打包分析
      open: true,  //注意这里要设置为true，否则无效
      gzipSize: true,
      brotliSize: true
    }),
    viteMockServe({
      mockPath: "/mock/source", // 解析，路径可根据实际变动
      localEnabled: false, // 开发环境
      prodEnabled: true, // 生产环境设为true，也可以根据官方文档格式
      injectCode:
        ` import { setupProdMockServer } from '/mock';
        setupProdMockServer(); `,
      watchFiles: true, // 监听文件内容变更
      injectFile: resolves("src/main.tsx"), // 在main.ts注册后需要在此处注入，否则可能报找不到setupProdMockServer的错误
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 javascript
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#4377FE',//设置antd主题色
        },
      },
    }
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, 'src') },
    ]
  },
})
