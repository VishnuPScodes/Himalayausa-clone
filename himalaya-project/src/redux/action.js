


export const actionTypes={
    AUTH_ACTION_REQUEST:"AUTH_ACTION_REQUEST",
    AUTH_ACTION_SUCCESS:"AUTH_ACTION_SUCCESS",
    AUTH_ACTION_FAILURE:"AUTH_ACTION_FAILURE",
    AUTH_ACTION_LOGOUT:"AUTH_ACTION_LOGOUT",

    PRODUCT_LOADING_TRUE:'PRODUCT_LOADING_TRUE',
    PRODUCT_LOADING_FALSE:"PRODUCT_LOADING_FALSE"
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

export const authActionLogout=(()=>{
    return {
        type :actionTypes.AUTH_ACTION_LOGOUT
    }
})

export const productLoadingTrue=(()=>{
    return {
        type:actionTypes.PRODUCT_LOADING_TRUE
    }
})

export const productLoadingFalse=(()=>{
    return {
        type:actionTypes.PRODUCT_LOADING_FALSE
    }
})