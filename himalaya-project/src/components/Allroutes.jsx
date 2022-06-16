import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { SignIn } from "../pages/SignIn"
import { UserDetails } from "../pages/UserDetails"





export const Allroutes=(()=>{
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<SignIn/>} />
        <Route path="/User" element={<UserDetails/>} />
        
    </Routes>
})