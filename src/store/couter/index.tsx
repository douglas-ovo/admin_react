import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '@/store'
import { changeFlag, getUser } from '@/store/flag'

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
export const getData = createAsyncThunk('getData', async (params: any, thunkAPI) => {
    // console.log(params, thunkAPI);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(params)
            // thunkAPI.dispatch(changeFlag(!(thunkAPI.getState() as RootState).flag.value))
            // thunkAPI.dispatch(getUser(true))
        }, 2000)
    })
}
)

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment1: (state) => {
            state.value += 1
        },
        decrement1: (state) => {
            state.value -= 1
        },
        incrementx: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    extraReducers: bulider => {
        bulider.addCase(getData.pending, (state, action) => {
            state.loading = 'pending'
        })
        bulider.addCase(getData.fulfilled, (state, { payload }: any) => {
            state.value = payload
            state.loading = 'fullfilled'
        })
        bulider.addCase(getData.rejected, (state, action) => {
            state.loading = 'failer'
        })
    }
})

export const { increment1, incrementx, decrement1 } = counter.actions

// export const couter = (state: RootState) => state.counter.value

export default counter.reducer
