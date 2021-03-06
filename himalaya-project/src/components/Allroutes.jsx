import { Route, Routes } from "react-router-dom"
import { Cart } from "../pages/Cart"
import { CartEmpty } from "../pages/CartEmpty"
import { Checkout } from "../pages/Checkout"
import { HerbalList } from "../pages/HerbalList"
import { Home } from "../pages/Home"
import { OralListPage } from "../pages/OralListPage"
import { Payment } from "../pages/Payment"
import { PersonalCare } from "../pages/PersonalCare"
import { ProductDetails } from "../pages/ProductDetails"
import { ProductDetailsHerbal } from "../pages/productDetails/ProductDetailsHerbal"
import { ProductDetailsPersonal } from "../pages/productDetails/ProductDetailsPersonal"
import { Register } from "../pages/Register"
import { SignIn } from "../pages/SignIn"
import { UserDetails } from "../pages/UserDetails"
import { Footer } from "./Footer"
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
        <Route path="/ProductDetails/:id" element={<ProductDetails/>} />
        <Route path="/ProductDetailsHerbal/:id" element={<ProductDetailsHerbal/>} />
        <Route path="/ProductDetailsPersonal/:id" element={<ProductDetailsPersonal/>} />
        <Route path="/Cart" element={<PrivateRoute>
            <Cart/>
        </PrivateRoute>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Cartempty" element={<CartEmpty/>} />
        <Route path="/Footer" element={<Footer/>} />
        
    </Routes>
})