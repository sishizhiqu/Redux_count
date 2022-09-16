import {INCREMENT,DECREMENT} from './constant'

export default function countReducer(preState = 0, action) {
    

    //从action对象中获取type，data
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