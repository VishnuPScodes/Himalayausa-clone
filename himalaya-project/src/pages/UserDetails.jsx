
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { auth } from '../components/firebase/firebase'
import '../components/styles/user.css'
import { authActionLogout } from '../redux/action'



export const UserDetails=(()=>{
    const [user,setUser]=useState({})
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const signOutfxn=(()=>{

        signOut(auth);
        localStorage.setItem('auth',false)
        dispatch(authActionLogout())
        navigate('/')
    })
    return <div>
        <div id="heading">Account</div>
        <div style={{marginTop:"100px",marginLeft:"30px"}}>  
        <div id='bottom' >My Account</div>
        <div id='second'>Order History </div>
        <div id='order-details'>You haven't placed any orders yet.
        <div id='account'>Account Details</div>
        <div id='name'>Name:</div>
        <div id='name'>Email:{user?.email}</div>
        <div id='name'>Address:</div>
        <div id='name'>Address 2:</div>
        <div id='name'>Country:</div>
        <div id='name'>Zip:</div>
        <div id='name'>Phone:</div>
        <button id='btn-so' onClick={signOutfxn}>SIGN OUT</button>
</div>
        </div>
    </div>
})