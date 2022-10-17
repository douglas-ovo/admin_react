import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from '@/store'

export interface CounterState {
    value: boolean,
}

const initialState: CounterState = {
    value: false,
}

export const getUser = createAsyncThunk('getUser', async (params: any, thunkAPI) => {
    // console.log(params, thunkAPI);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(params)
        }, 2000)
    })
}
)

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeFlag(state, { payload }) {
            state.value = payload
        }
    },
    extraReducers: bulider => {
        bulider.addCase(getUser.fulfilled, (state, { payload }: any) => {
            state.value = payload
        })
    }
})

export const { changeFlag } = counter.actions

// export const flag = (state: RootState) => state.flag.value

export default counter.reducer