import { actionTypes, authActionFailure, authActionRequest, authActionSuccess } from "./action"



const initState={
    loading:false,
    auth:false,
    error:false
}


export const authReducer=((state=initState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_ACTION_FAILURE :{
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        case actionTypes.AUTH_ACTION_REQUEST :{
            return {
                ...state,
                loading:true
            }
        }
        case actionTypes.AUTH_ACTION_SUCCESS :{
            return {
                ...state,
                loading:false,
                auth:true
            }
        }
        case actionTypes.AUTH_ACTION_LOGOUT :{
            return {
                ...state,
                loading:false,
                auth:false
            }
        }
        default :
        return state
    }

})