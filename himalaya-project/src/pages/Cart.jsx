
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../components/styles/cart.css'



export const Cart=(()=>{
    const [cartitems,setCartitems]=useState(1)
    const [cartdata,setCartdata]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/cart').then((res)=>{
            setCartdata(res.data)
        })
    },[])
    return <div>
        <div id="heading">Shopping Cart</div>
        {cartdata.map((e)=>{
            return (
                <div id='single-c-item'>
                <div id='delete'></div>
                <div id='c-img'>
                    <img src={e.data.url} height="100%"  alt="" />
                </div>
                <div id='c-name'>{e.data.name}</div>
                <div id='c-price'></div>
                <div id='plus-btns' style={{marginTop:"60px"}}>
                            <div id='btn-1-min' onClick={(()=>{
                                if(cartitems!=1){
                                    setCartitems(cartitems-1)
                                }
                               
                            })}>-</div>
                            <div id='display-plus'>{cartitems}</div>
                            <div id='btn-1-plus'  onClick={(()=>{
                                setCartitems(cartitems+1)
                            })}>+</div>
                           
                        </div>
                 <div id='c-title'></div>       
            </div>
            )
        })}
       
    </div>
})