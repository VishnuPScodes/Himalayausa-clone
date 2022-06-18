
import '../components/styles/check.css'


export const Checkout=(()=>{
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
            <div id='person-logo'>
                <img src="" alt="" />
            </div>
           </div>
           
           <div id="right-check"></div>
        </div>
    </div>
})