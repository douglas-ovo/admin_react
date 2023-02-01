import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppThunk } from '@/store'
import { changeFlag, changeFlagAsync } from '@/store/flag'

export interface CounterState {
    value: number,
    loading: string
}

const initialState: CounterState = {
    value: 0,
    loading: 'idle'
}

/* createAsyncThunk
第一个参数：action 对象的 type 属性
第二个参数：函数作用执行异步操作
    第一个参数是 payload 
    第二个参数是 thunkAPI ，可以通过 thunkAPI 对象拿到 dispatch 方法 
*/
//需要改其他slice中的值
export const incrementAsync = createAsyncThunk('incrementAsync', async (params: any, thunkAPI) => {
    // console.log(params, thunkAPI);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //操作counter
            resolve(params + (thunkAPI.getState() as RootState).counter.value)

            //操作flag
            // thunkAPI.dispatch(changeFlag(!(thunkAPI.getState() as RootState).flag.value))
            // thunkAPI.dispatch(changeFlagAsync(true) as any)
        }, 2000)
    })
}
)

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment1: (state, { payload }) => {
            state.value += payload
        },
        decrement1: (state, { payload }) => {
            state.value -= payload
        },
        // incrementx: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // }
    },
    extraReducers: bulider => {
        bulider.addCase(incrementAsync.pending, (state, action) => {
            state.loading = 'pending'
        })
        bulider.addCase(incrementAsync.fulfilled, (state, { payload }: any) => {
            state.value = payload
            state.loading = 'fullfilled'
        })
        bulider.addCase(incrementAsync.rejected, (state, action) => {
            state.loading = 'failure'
        })
    }
})

export const { increment1, decrement1 } = counter.actions

// export const counter = (state: RootState) => state.counter.value

export default counter.reducer
