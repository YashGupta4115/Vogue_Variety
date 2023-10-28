import { useContext } from "react";
import { CartContext } from '../../Components/contexts/cart.context';
import './checkout.styles.scss';
import '../../Components/checkout-item/checkout-item.component';
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

const CheckOut = ()=>{

    const { cartItems,cartTotal } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {
                    cartItems.map((cartItem)=>{
                        return <CheckoutItem key = {cartItem.id} cartItem={cartItem}/>
                    })
                }
            <div className="total">Total : {cartTotal}</div>
        </div>
    )
}

export default CheckOut;