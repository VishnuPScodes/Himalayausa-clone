
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { BsBag } from 'react-icons/bs'
import '../components/styles/products.css'



export const ProductDetails=(()=>{
    const[cartitems,setCartitems]=useState(1)
    return <div>
        <div id="pro-detail-main">
          <div id='left-pro'>
            <div id='img-pro'></div>
          </div>
          <div id='right-pro'>
            <div id='data-pro'>
                <div id='text-pro' >  Bamboo & Sea Salt Whitening Antiplaque</div>
                <div id='price-pro'>$3.99</div>
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
                <div id='des-pro'>Get the smile you’ve been looking for with gentle Bamboo, which is famous for its strong fibers and silica, and purified Sea Salt for a clean, fresh mouth and healthy-looking gums.

Suggested Use

Brush thoroughly after each meal, or at least twice a day, or as directed by a dentist. Consult your dentist for children under 2 years. Children under 6 years should use a pea-sized amount under adult supervision.</div>
            </div>
          </div>
        </div>
    </div>
})