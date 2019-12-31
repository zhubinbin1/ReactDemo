import { TypeAction } from '../../typings/common'
export interface TypeHome {
    currentCategory:string
}
let initState = {
    currentCategory:"all"
}
export default function (state: TypeHome = initState, action: TypeAction) {
    switch(action.type){
        default:
            return state;
    }
}