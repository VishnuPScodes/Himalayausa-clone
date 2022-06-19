
import '../components/styles/empty.css'
import {BsCart} from 'react-icons/bs'


export const CartEmpty=(()=>{
    return <div>
        <div id="empty-main">
             <div id='cart-e-icon'><BsCart id='icon-bs'/></div>
             <div id='cart-e-txt'>Shopping cart is empty</div>
             <div id='e-bottom'>You have no items in your shopping cart.</div>
             <div>
                <button id='btn-so-e'>Continue Shopping</button>
             </div>
        </div>
    </div>
})