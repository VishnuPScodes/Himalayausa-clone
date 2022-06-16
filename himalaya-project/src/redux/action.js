


export const actionTypes={
    AUTH_ACTION_REQUEST:"AUTH_ACTION_REQUEST",
    AUTH_ACTION_SUCCESS:"AUTH_ACTION_SUCCESS",
    AUTH_ACTION_FAILURE:"AUTH_ACTION_FAILURE"
}



export const authActionSuccess=((data)=>{
    return {
        type:actionTypes.AUTH_ACTION_SUCCESS,
        payload:data
    }
})

export const authActionRequest=(()=>{
    return {
        type:actionTypes.AUTH_ACTION_REQUEST
    }
})

export const authActionFailure=(()=>{
    return {
        type:actionTypes.AUTH_ACTION_FAILURE
    }
})