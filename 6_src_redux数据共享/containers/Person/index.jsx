import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
  addPerson = ()=>{
    const {nameNode,ageNode} = this
    // console.log(nameNode.value,ageNode.value)
    // console.log(this.props)
   if(nameNode.value.trim() !== "" && ageNode.value.trim() !== ""){
    this.props.addPerson({id:Date.now(),name:nameNode.value,age:ageNode.value})
   }
      
    
    
  }
  render() {
    return (
      <div>
        <h3>Person组件</h3>
        <input ref={c => this.nameNode = c} type="text" placeholder='输入名字'/><br/><br/>
        <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄'/><br/><br/>
        <button onClick={this.addPerson}>添加</button>
        <ul>

          {
            this.props.persons.map(personObj => {
              return <li key={personObj.id}>{personObj.name} --- {personObj.age}</li>
            })
          }
          

        </ul>
      </div>
    )
  }
}

export default connect(
  //映射状态
  state => ({persons:state.persons}),
  //映射状态操作函数
  {
    addPerson: createAddPersonAction
  }
)(Person)