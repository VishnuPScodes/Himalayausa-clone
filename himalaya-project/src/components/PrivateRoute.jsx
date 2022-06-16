import { useSelector } from "react-redux"
import { Navigate } from "react-router";




export const PrivateRoute=(({children})=>{
    const authState=useSelector(state=>state.auth);
    if(authState==false){
        return <Navigate to={'/Login'} replace={false} />
    }
    return children
})