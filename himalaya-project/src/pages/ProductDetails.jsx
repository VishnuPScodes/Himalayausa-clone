
import { Button } from '@chakra-ui/react'
import '../components/styles/products.css'



export const ProductDetails=(()=>{
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
                        <div id='btn-1-min'>-</div>
                        <div id='display-plus'></div>
                        <div id='btn-1-plus'>+</div>
                    </div>
                    {/* <Button>-</Button> <Button>+</Button> */}
                </div>
            </div>
          </div>
        </div>
    </div>
})