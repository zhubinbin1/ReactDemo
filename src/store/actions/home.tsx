export default {
    setCurrentCategory(payload:any){ 
        return {type:"setCurrentCategory",payload}
    }
}

interface T{
    setCurrentCategory(payload:any):{
        type:string,
        payload:any
    }
}