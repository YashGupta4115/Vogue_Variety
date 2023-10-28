import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { CartContext } from '../contexts/cart.context.jsx';
import './cart-dropdown.styles.scss';
import { useContext } from 'react';


const CartDropDown = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                cartItems.map( (item) => 
                    (
                        <CartItem key={item.id} cartItem={item}/>
                    )
                )
                }
            </div>
            <Button>CheckOut</Button>
        </div>
    )
}

export default CartDropDown;