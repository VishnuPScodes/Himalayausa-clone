// import { useContext, useEffect, useState } from "react"
// import { auth } from "../firebase/firebase"


// const authContext=useContext()
// export const useAuth=(()=>{
//     return useContext(authContext)
// })


// export const authProvider=(({children})=>{
//     const [currentUser,setCurrentUser]=useState()
//     const register=((email,password)=>{
//        return auth.createUserWithEmailAndPassword(email,password)
//     })
//     useEffect(()=>{
//        const unsubscribe= auth.onAuthStateChanged((user)=>{
//             setCurrentUser(user)
//         })
//         return unsubscribe
//     },[])

//     const value={
//         currentUser,
//         register
//     }

//      return <authContext.Provider value={value}>
//            {children}
// </authContext.Provider>
    
// })