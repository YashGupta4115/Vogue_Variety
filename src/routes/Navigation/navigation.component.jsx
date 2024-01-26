
import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import '../Navigation/navigation.styles.scss';
import { ReactComponent as VogueLogo } from '../../assets/vogue-variety-high-resolution-logo-transparent.svg';
import { UserContext } from "../../Components/contexts/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropDown from "../../Components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../Components/contexts/cart.context";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <VogueLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
  
            {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            )}
            <CartIcon/>
          </div>
          {isCartOpen && <CartDropDown/>}
        </div>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;