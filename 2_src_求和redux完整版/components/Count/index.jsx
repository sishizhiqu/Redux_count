import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'
import { DECREMENT, INCREMENT } from '../../redux/constant'

export default class Count extends Component {
    state = { name:'tom' }
    increment = () => {
        //获取用户选择的数字
        const { value } = this.checkNum

        store.dispatch({type: INCREMENT,data: +value})    //自己交出去一个action对象
        // store.dispatch(createIncrementAction(+value))    //定义一个action工厂，通过方法生成一个action对象
    }

    decrement = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        if(store.getState()>0){
            // store.dispatch({type: DECREMENT,data: +value})
            store.dispatch(createDecrementAction(+value))
        }
        
    }

    incrementIfOdd = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        if(store.getState() % 2 !== 0 ){
            // store.dispatch({type: INCREMENT,data: +value}) 
            store.dispatch(createIncrementAction(+value))
        }
    }

    incrementAsync = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        setTimeout(() => {
            // store.dispatch({type: INCREMENT,data: +value}) 
            store.dispatch(createIncrementAction(+value))
        }, 500);
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>
                <select ref={c => { this.checkNum = c }} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
            </div>
        )
    }
}
