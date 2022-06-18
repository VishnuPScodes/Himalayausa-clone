import { useSelector } from "react-redux"
import { Navigate } from "react-router";




export const PrivateRoute=(({children})=>{
    const authState=useSelector(state=>state.auth);
    const auth=localStorage.getItem('auth')
    console.log('auth at pr',auth)
    if(auth=='false'){
        return <Navigate to={'/Login'} replace={false} />
    }
    return children
})