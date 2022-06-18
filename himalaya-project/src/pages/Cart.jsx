
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../components/styles/cart.css'
import {AiOutlineDelete} from 'react-icons/ai'
import { addCartQuantity } from '../redux/action'
import { useSelector,useDispatch } from 'react-redux'

export const Cart=(()=>{
    const [cartitems,setCartitems]=useState(1)
    const [cartdata,setCartdata]=useState([])
    const [deleted,setDeleted]=useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get('http://localhost:8080/cart').then((res)=>{
            setCartdata(res.data)
            dispatch(addCartQuantity(res.data))
        })
    },[deleted])
    const cartDataRedux=useSelector(state=>state.cartquantity)
    console.log('cart data',cartDataRedux)
    var total=0
  
   
    return <div>
        <div id="heading">Shopping Cart</div>
        {cartDataRedux.map((e)=>{
            return (
                <div id='single-c-item'>
                <div id='delete'><AiOutlineDelete onClick={(()=>{
                      axios.delete(`http://localhost:8080/cart/${e.id}`).then(()=>{
                        setDeleted(!deleted)
                      })
                })} id='delete-icon'/></div>
                <div id='c-img'>
                    <img src={e.data.url} height="100%"  alt="" />
                </div>
                <div id='c-name'>{e.data.name}</div>
                <div id='c-price'>${e.data.price}</div>
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
            <div id='sub-total'>Subtotal:</div>
            <div id='g-total'>Grand Total:</div>
            <button id='btn-cart-5'>PROCCEED TO CHECKOUT</button>
        </div>
       
    </div>
})