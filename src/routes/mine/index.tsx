import React from 'react'
import {connect}from 'react-redux'
import {TypeRootState} from '../../store/reducers'
import {TypeMine} from '../../store/reducers/mine'
import actions from '../../store/actions/mine'
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
class Mine extends React.Component<Props,State>{
    render(){
        this.props.children;
        // this.props.hist
        return(
            <div>mine</div>
        )
    }
}
let mapStateToProps = (state:TypeRootState):TypeMine=>state.mine
export default connect(mapStateToProps,actions)(Mine)