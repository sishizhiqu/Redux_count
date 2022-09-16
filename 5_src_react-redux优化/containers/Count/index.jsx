
import React, { Component } from 'react'
//引入connect用于连接UI与redux，且connect（）（）可以生成容器组件
import {connect} from 'react-redux'
import { createDecrementAction, createIecrementAsyncAction, createIncrementAction } from '../../redux/count_action'

//UI组件
class Count extends Component {
    state = { name:'tom' }
    increment = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        this.props.add(+value)

    }

    decrement = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        if(this.props.result > 0){
            this.props.sub(+value)
        }
        
    }

    incrementIfOdd = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        if( this.props.result % 2 !== 0 ){
            this.props.add(+value)
        }
   
    }

    incrementAsync = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        this.props.addAsync(+value)

      
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>当前求和为：{this.props.result}</h2>
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





//创建并暴露一个容器组件
/* 
    准备一个容器组件，该组件主要负责：和redux进行数据的交互
    可以随意的使用redux的API，和UI组件是父子关系
*/

export default connect(
    //映射状态
    state => ({result: state}),
    //映射操作状态的方法
    /* dispatch => ({
        add:number => dispatch(createIncrementAction(number)),
        sub:number => dispatch(createDecrementAction(number)),
        addAsync: number => dispatch(createIecrementAsyncAction(number))
    }) */
    {
        add:createIncrementAction,
        sub:createDecrementAction,
        addAsync: createIecrementAsyncAction
    }
    )(Count)
