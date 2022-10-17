import { createSlice } from "@reduxjs/toolkit";
import type { RootState, AppThunk } from '@/store'

export interface CounterState {
    value: boolean,
}

const initialState: CounterState = {
    value: false,
}

export const changeFlagAsync = (params: boolean): AppThunk => (dispatch => {
    setTimeout(() => {
        dispatch(changeFlag(params))
    }, 2000)
})

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeFlag(state, { payload }) {
            state.value = payload
        }
    }
})

export const { changeFlag } = counter.actions

export const flag = (state: RootState) => state.flag.value

export default counter.reducer