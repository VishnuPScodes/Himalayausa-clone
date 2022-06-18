
import { useEffect, useState } from 'react'
import { BsFilePersonFill } from 'react-icons/bs'
import '../components/styles/check.css'
import { auth } from '../components/firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
import {
    FormControl,
    Input,
    FormLabel,
    Select,
    FormErrorMessage,
    FormHelperText,
    Button
    
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export const Payment=(()=>{
    const[data,setData]=useState([])
    const [user,setUser]=useState('');
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`https://himalayausa-clone.herokuapp.com/cart`).then((res)=>{
            setData(res.data)
        })
    },[])
    console.log('data at chck',data)
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
       
    })
    const handleLog=(()=>{
        signOut(auth)
        navigate('/')
    })
   
    return <div>
        <div style={{display:"flex"}}>
           <div id="left-check">
           <div id='express-txt'>Express Checkout</div>
            <div id='express-check'>
           
                <img id='img-check' src="https://cdn.shopify.com/shopifycloud/help/assets/manual/shop-pay-installments/shop-pay-logo-color-e824c8c627de20423f3abba730d2d5df83c5b848847f029f91ec1bd011f6b0e3.png" alt="" />
                <img id='img-check-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/1280px-Amazon_Pay_logo.svg.png" alt="" />
                <img id='img-check-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg/2560px-Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg.png" alt="" />
            </div>
            <div>Or</div>
            <div id='txt'>Contact Information</div>
            <div id='person-logo-div'>
             <img id='person-logo' src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png" alt="" />
             <div>
                <div>{user?.email}</div>
                <div onClick={handleLog} id='log-out-check'>Log out</div>
             </div>
            </div>
            <div id='shipping-ad' >Payment</div>
            <div id='form-all'>
                <div id='name' style={{display:"flex"}}>
                <FormControl isRequired>
  <FormLabel htmlFor='first-name'>First name</FormLabel>
  
  <Input   id='first-name' style={{marginTop:"20px"}} placeholder='Cart Number' />
  <Input   id='first-name' style={{marginTop:"20px"}} placeholder='Name on card' />
  <div style={{display:"flex"}}>
  <Input   id='first-name' style={{marginTop:"20px",width:"45%"}} type='date' placeholder='Expiry date' />
  <Input   id='first-name' style={{marginTop:"20px",width:"45%",marginLeft:"20px"}} placeholder='Source Code' />
  </div>
 

  
  
  
</FormControl>

                </div>
           
           
            </div>
            <div id='box-cart' style={{display:"flex"}}>
                    <button id='btn-check-out-1'onClick={(()=>{
                alert('Your payment is completed')
                navigate('/')
            })}>Pay now</button>
                    <div id='link-check'>
                        <Link  to={'/Checkout'}>Return to shipping</Link>
                    </div>
                    </div>
            
           </div>
           
           <div id="right-check">
            {data.map((e)=>{
                return (
                    <div id='cart-item-check'>
                    <div id='img-cart-c'><img height={'100%'} src={e.data?.url} alt="" /></div>
                    <div id='cart-name-c' style={{textAlign:"left"}}>{e.data.name}</div>
                    <div id='cart-price-c'>${e.data.price}</div>
                </div>
                )
            })}
           
            <div id='coupon'>
                <Input placeholder='Coupon' style={{width:"70%",marginTop:"10px"}} />
                <Button style={{marginLeft:"20px",backgroundColor:"#c3c6c2"}}>Apply</Button>
            </div>
            <div id='total-right'>
                <div>Sub Total:</div> <div id='total-calc'>${data[0]?.data.price}</div></div>
                <div id='g-total-check'>
                 <div style={{marginLeft:"50px",marginTop:"30px"}}>Total:</div>
                 <div id='total-value'>${data[0]?.data?.price}</div>
                </div>
           </div>
        </div>
    </div>
})