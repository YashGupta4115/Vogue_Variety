import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { CartContext } from '../contexts/cart.context.jsx';
import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const CartDropDown = () => {

    const { cartItems,setIsCartOpen} = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = ()=>{
        setIsCartOpen(false);
        navigate('/checkout');
    }


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
            <Button onClick={checkoutHandler}>CheckOut</Button>
        </div>
    )
}

export default CartDropDown;