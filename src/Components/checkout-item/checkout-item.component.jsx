import { CartContext } from '../contexts/cart.context';
import './checkout-item.styles.scss'
import { useContext } from 'react';

const CheckoutItem = ({cartItem}) => {
    const { imageUrl,name,quantity,price } = cartItem;
    const { deleteItemFromCart,removeItemFromCart,addItemToCart } = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>removeItemFromCart(cartItem)}>
                    &#60;&nbsp;
                </div>
                <span >{quantity}</span>
                <div className='arrow' onClick={()=>addItemToCart(cartItem)}>
                &nbsp;&#62;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>{deleteItemFromCart(cartItem)}}>&#10005;</div>

        </div>
    )

}

export default CheckoutItem;