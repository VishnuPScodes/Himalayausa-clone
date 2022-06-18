import axios from "axios"
import { useEffect, useState } from "react"




export const CartCounter=(()=>{
    const[cartcount,setCartcount]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/cart').then((res)=>{
            setCartcount(res.data)
        })
    },[setCartcount])
    return <div>
        <div id="cart-4">{cartcount.length}</div>
    </div>
})