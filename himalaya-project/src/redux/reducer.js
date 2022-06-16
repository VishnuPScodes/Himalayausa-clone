import { authActionFailure, authActionRequest, authActionSuccess } from "./action"



const initState={
    loading:false,
    auth:false,
    error:false
}


export const authReducer=((state=initState,action)=>{
    switch(action.type){
        case authActionFailure.type :{
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        case authActionRequest.type :{
            return {
                ...state,
                loading:true
            }
        }
        case authActionSuccess.type :{
            return {
                ...state,
                loading:false,
                auth:true
            }
        }
        default :
        return state
    }

})