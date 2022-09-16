import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction } from '../../redux/actions/count'

class Count extends Component {
    handleAdd = () => {
        // console.log(this.props)
        this.props.add(1)
    }
    render() {

        return (
            <div>
                <h3>我是Count组件</h3>
                <h4>当前求和为：{this.props.count}</h4>
                <h4>当前总人数为: {this.props.personNum}</h4>
                <button onClick={this.handleAdd}>+1</button>
            </div>
        )
    }
}

export default connect(
    //映射状态
    state => ({count: state.count,personNum:state.persons.length}),
    //映射状态操作函数
    {
        add: createIncrementAction
    }
)(Count)
