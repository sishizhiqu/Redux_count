/* 
    该组件是Count 组件的UI组件，只负责：结构的呈现、交互等，不可以见到任何redux相关的API
*/

import React, { Component } from 'react'


export default class Count extends Component {
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
