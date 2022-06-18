
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../components/styles/cart.css'
import {AiOutlineDelete} from 'react-icons/ai'
import { addCartQuantity } from '../redux/action'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
export const Cart=(()=>{
    const navigate=useNavigate()
    const [cartitems,setCartitems]=useState(1)
    const [cartdata,setCartdata]=useState([])
    const [deleted,setDeleted]=useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get('https://himalayausa-clone.herokuapp.com/cart').then((res)=>{
            setCartdata(res.data)
            dispatch(addCartQuantity(res.data))
        })
    },[deleted])
    
    const cartDataRedux=useSelector(state=>state.cartquantity)
    console.log('cart data',cartDataRedux)
    var total=0
  
   
    return <div>
        <div id="heading">Shopping Cart</div>
        {cartdata.map((e)=>{
            return (
                <div id='single-c-item'>
                <div id='delete'><AiOutlineDelete onClick={(()=>{
                      axios.delete(`https://himalayausa-clone.herokuapp.com/cart/${e.id}`).then(()=>{
                        setDeleted(!deleted)
                      })
                })} id='delete-icon'/></div>
                <div id='c-img'>
                    <img src={e.data?.url} height="100%"  alt="" />
                </div>
                <Link to={`/ProductDetails/${e.data?.id}`} id='c-name'>{e.data?.name}</Link>
                <div id='c-price'>${e.data?.price}</div>
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
        <div id='total-main'>
            <div id='sub-total'>Subtotal:${cartdata[0]?.data.price}</div>
            <div id='g-total'>Grand Total:${cartdata[0]?.data.price}</div>
            <button id='btn-cart-5' onClick={(()=>{
                navigate('/Checkout')
            })}>PROCCEED TO CHECKOUT</button>
        </div>
       
    </div>
})