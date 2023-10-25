
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import '../Navigation/navigation.styles.scss';
import { ReactComponent as VogueLogo } from '../../assets/crown.svg';

const Navigation = ()=> {

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