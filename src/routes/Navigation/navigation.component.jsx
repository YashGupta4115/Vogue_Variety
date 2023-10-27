
import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import '../Navigation/navigation.styles.scss';
import { ReactComponent as VogueLogo } from '../../assets/crown.svg';
import { UserContext } from "../../Components/contexts/user.context";

const Navigation = ()=> {

    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    
    return( 
        <div>
            <Fragment>
                <div className="navigation">
                    <Link className="logo-container" to='/'>
                        <VogueLogo/>
                    </Link>
                    
                    <div className="nav-links-container">
                       <Link className="nav-link" to='/shop'>
                            SHOP
                       </Link> 
                    </div>

                    <div className="nav-links-container">
                       <Link className="nav-link" to='/auth'>
                            Sign In
                       </Link> 
                    </div>
                </div>
                <Outlet/>
            </Fragment>
        </div>
    )
    
}

export default Navigation;