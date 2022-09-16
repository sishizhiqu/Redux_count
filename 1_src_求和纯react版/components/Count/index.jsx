import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0 }
    increment = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        const { count } = this.state

        // 更新状态
        this.setState({ count: count + (+value) })
    }

    decrement = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        const { count } = this.state

        // 更新状态
        if (count > 0) {
            this.setState({ count: count - (+value) })
        }
    }

    incrementIfOdd = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        const { count } = this.state

        // 更新状态
        if (count % 2 !== 0) {
            this.setState({ count: count + (+value) })
        }
    }

    incrementAsync = () => {
        //获取用户选择的数字
        const { value } = this.checkNum
        const { count } = this.state

        // 更新状态
        setTimeout(() => {
            this.setState({ count: count + (+value) })
        }, 500);
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
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
