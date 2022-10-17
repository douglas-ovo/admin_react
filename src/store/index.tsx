/* 
参考博客：https://blog.csdn.net/qq_40513881/article/details/125601749
         https://www.jianshu.com/p/3e9683de4268
         https://www.jianshu.com/p/f62fa2cd4fe9
         https://blog.csdn.net/weixin_43016472/article/details/119749109
参考文档：https://redux-toolkit.js.org/tutorials/typescript
         https://react-redux.js.org/tutorials/quick-start
*/

import { configureStore } from '@reduxjs/toolkit'

import counter from './couter'
import flag from './flag'

export const store = configureStore({
    reducer: {
        counter,
        flag
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch