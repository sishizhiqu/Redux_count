/* 
    准备一个容器组件，该组件主要负责：和redux进行数据的交互
    可以随意的使用redux的API，和UI组件是父子关系
*/

//引入Count的UI组件
import CountUI from '../../components/Count'

//引入connect用于连接UI与redux，且connect（）（）可以生成容器组件
import {connect} from 'react-redux'
import { createDecrementAction, createIecrementAsyncAction, createIncrementAction } from '../../redux/count_action'

//mapStateToProps用于给UI组件映射redux中的状态，通过props传递
function mapStateToProps(state){ //借助a传递redux中的状态
    return {result:state}
}
function mapDispatchToProps(dispatch){ //借助b传递操作状态的方法
    return {
        add:number => dispatch(createIncrementAction(number)),
        sub:number => dispatch(createDecrementAction(number)),
        addAsync: number => dispatch(createIecrementAsyncAction(number))
    } 
}
//创建并暴露一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
