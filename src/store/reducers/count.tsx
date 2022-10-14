import { INCREMENT, DECREMENT } from '../constant'
import { AnyAction } from 'redux'

const initCount = 0
export default function countReducer(preState = initCount, action: AnyAction) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}