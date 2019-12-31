import { combineReducers } from 'redux'
import {connectRouter} from 'connected-react-router'
import history from '../history'
import home from './home'
import profile from './profile'
import mine from './mine'
let reducers = {
    home,
    profile,
    mine,
    router:connectRouter(history)
}
export type TypeRootState={
    [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
}
let reducer = combineReducers(reducers)
export default reducer