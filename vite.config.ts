import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'
import { visualizer } from 'rollup-plugin-visualizer'
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
