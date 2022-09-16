import React, { Component, useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

//定义一个Count组件（类式组件）
/* export default class Count extends Component {
    
    state = {
        count: 0
    }
    add = ()=>{
        const {count} = this.state
        this.setState({count:count+1})
    }
    
    componentDidMount(){
        setInterval(()=>{
            const {count} = this.state
            this.setState({count: count+1})
        },1000)
    }
  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
} */


//定义一个Count函数式组件
export default function Count() {

    //let inputNode;
    // let MyRef = React.createRef()
    let MyRef = useRef()
    
    const [count, setCount] = useState(0)
    const [name] = useState('Tom')

    function add() {
        // setCount(count+1)
        setCount(count => count + 1)
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function show(){
        // alert(inputNode.value)
        alert(MyRef.current.value)
    }

    //生命周期hook
    //第一个参数是一个函数，挂载成功一定会调用一次
    //第二个参数是数组，用来监听状态，监听意味着只要状态更新就调用之前的函数。如果为空，则都监听；如果不为空，则只监听数组内的
    useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        return ()=>{
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h2>当前求和为：{count}--- 当前人为： {name}</h2>

            {/* 回调形式ref，和类式组件一样，只不过用let声明 */}
            {/* <input ref={c=> inputNode = c} type="text" /> */}

            {/* 创建容器形式 */}
            <input ref={MyRef} type="text" />

            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>点我卸载组件</button>
            <button onClick={show}>点我提示输入</button>
        </div>
    )
}
