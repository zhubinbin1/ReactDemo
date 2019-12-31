import React from 'react'
import {connect}from 'react-redux'
import {TypeRootState} from '../../store/reducers'
import {TypeHome} from '../../store/reducers/home'
import actions from '../../store/actions/home'
import {RouteComponentProps} from 'react-router'
import './index.less'

interface State {

}
//组建的三个来源,1)mapStateToProps返回值,2,action对象类型,3路由,4,用户传入
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof actions
interface IParams{}
type RouteProps = RouteComponentProps<IParams>
type Props =StateProps&DispatchProps&RouteProps&{
    childRen?:any
}
class Home extends React.Component<Props,State>{
    render(){
        this.props.children;
        // this.props.hist
        return(
            <div>首页</div>
        )
    }
}
let mapStateToProps = (state:TypeRootState):TypeHome=>state.home
export default connect(mapStateToProps,actions)(Home)