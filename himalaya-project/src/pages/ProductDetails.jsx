
import { Button, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { useParams } from 'react-router'
import '../components/styles/products.css'
import { useDispatch ,useSelector} from 'react-redux'
import { addCartQuantity, productLoadingFalse, productLoadingTrue } from '../redux/action'



export const ProductDetails=(()=>{
    const loading=useSelector(state=>state.productLoading)
    const [singledata,setSingledata]=useState('')
    const {id}=useParams()
    const dispatch=useDispatch()
    console.log('id recieved',id,'and type',typeof(id))
    const[cartitems,setCartitems]=useState(1)
    const addToCart=(()=>{
        dispatch(addCartQuantity(cartitems))
        
        let cartData={
            qty:cartitems,
            data:singledata
        }
        axios.post(`https://himalayausa-clone.herokuapp.com/cart`,cartData)
    })
    useEffect(()=>{
        dispatch(productLoadingTrue())
        axios.get(`https://himalayausa-clone.herokuapp.com/oral/${id}`).then((res)=>{
            dispatch(productLoadingFalse())
            setSingledata(res.data)
           
        })
    },[])
    console.log('single',singledata)
   
    return <div>
        {loading==true?<Spinner/>: <div id="pro-detail-main">
          <div id='left-pro'>
            <div id='img-pro'><img src={singledata.url} alt="" /></div>
          </div>
          <div id='right-pro'>
            <div id='data-pro'>
                <div id='text-pro' > {singledata.name}</div>
                <div id='price-pro'>${singledata.price}</div>
                <div id='btns-pro'>
                    <div id='plus-btns'>
                        <div id='btn-1-min' onClick={(()=>{
                            if(cartitems!=1){
                                setCartitems(cartitems-1)
                            }
                           
                        })}>-</div>
                        <div id='display-plus'>{cartitems}</div>
                        <div id='btn-1-plus' onClick={(()=>{
                            setCartitems(cartitems+1)
                        })}>+</div>
                       
                    </div>
                    <Button onClick={addToCart} id='addtocart'> <BsBag/> ADD TO CART</Button>
                    {/* <Button>-</Button> <Button>+</Button> */}
                </div>
                <Button id='buy-it' onClick={(()=>{
                    navigate('/Checkout')
                })}>BUY IT NOW</Button>
                <div id='des-pro'>{singledata.des}</div>
            </div>
          </div>
        </div>}
       
    </div>
})