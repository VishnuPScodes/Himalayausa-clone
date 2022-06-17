import { Route, Routes } from "react-router-dom"
import { HerbalList } from "../pages/HerbalList"
import { Home } from "../pages/Home"
import { OralListPage } from "../pages/OralListPage"
import { PersonalCare } from "../pages/PersonalCare"
import { ProductDetails } from "../pages/ProductDetails"
import { Register } from "../pages/Register"
import { SignIn } from "../pages/SignIn"
import { UserDetails } from "../pages/UserDetails"
import { PrivateRoute } from "./PrivateRoute"





export const Allroutes=(()=>{
    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<SignIn/>} />
        <Route path="/User" element={<PrivateRoute>
            <UserDetails/>
        </PrivateRoute>} />
        <Route path="/Oralcare" element={<OralListPage/>} />
        <Route path="/Herbal" element={<HerbalList/>} />
        <Route path="/Personalcare" element={<PersonalCare/>} />
        <Route path="/Productdetails" element={<ProductDetails/>} />
        
    </Routes>
})