/* 
    该文件是专门用于创建Count组件相关的action
*/
import {INCREMENT,DECREMENT} from '../constant'
// import store from './store';


export function createIncrementAction(number){
    return {type:INCREMENT,data:number}
}
export function createDecrementAction(number){
    return {type:DECREMENT,data:number}
}
//异步action
export function createIecrementAsyncAction(number){
    /* return ()=>{
        setTimeout(() => {
            store.dispatch(createIncrementAction(number))
        }, 500);
    } */
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(number))
        }, 500);
    }
}
