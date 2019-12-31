import { TypeAction } from '../../typings/common'
export interface TypeProfile {
    currentCategory:string
}
let initState = {
    currentCategory:"all"
}
export default function (state: TypeProfile = initState, action: TypeAction) {
    switch(action.type){
        default:
            return state;
    }
}