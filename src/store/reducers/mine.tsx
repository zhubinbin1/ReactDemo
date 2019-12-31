import { TypeAction } from '../../typings/common'
export interface TypeMine {
    currentCategory:string
}
let initState = {
    currentCategory:"all"
}
export default function (state: TypeMine = initState, action: TypeAction) {
    switch(action.type){
        default:
            return state;
    }
}