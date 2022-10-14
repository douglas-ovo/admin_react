import { INCREMENT, DECREMENT } from '../constant'
import { Dispatch } from 'react'

export const increment = (data: number) => ({
    type: INCREMENT,
    data
})

export const decrement = (data: number) => ({
    type: DECREMENT,
    data
})

export const incrementAsync = (data: number, delay: number) => {
    (dispath: any) => {
        setTimeout(() => {
            dispath(increment(data))
        }, delay)
    }
}
