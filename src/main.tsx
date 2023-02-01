import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/store'
import App from './App'
import '@/assets/css/reset.less'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import { setupProdMockServer } from '../mock'
setupProdMockServer()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
