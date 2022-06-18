
import { Button } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { useParams } from 'react-router'
// import '../components/styles/products.css'



export const ProductDetailsPersonal=(()=>{
    const [singledata,setSingledata]=useState('')
    const {id}=useParams()
    console.log('id recieved',id,'and type',typeof(id))
    const[cartitems,setCartitems]=useState(1)
    useEffect(()=>{
        axios.get(`http://localhost:8080/personal/${id}`).then((res)=>{
            setSingledata(res.data)
        })
    },[])
    console.log('single',singledata)
   
    return <div>
        <div id="pro-detail-main">
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
                    <Button id='addtocart'> <BsBag/> ADD TO CART</Button>
                    {/* <Button>-</Button> <Button>+</Button> */}
                </div>
                <Button id='buy-it'>BUY IT NOW</Button>
                <div id='des-pro'>{singledata.des}</div>
            </div>
          </div>
        </div>
    </div>
})