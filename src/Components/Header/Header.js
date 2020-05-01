import React from 'react';
import logo from '../../../src/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useAuth} from '../Login/useAuth';
import cart from '../Cart/Cart'
const Header = () => {
    const auth = useAuth();
    return (
            <div className="header" >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="/menu"><img src={logo} alt=""/></a>

                    <ul className="navbar-nav ml-auto">
                    <li><FontAwesomeIcon icon={faShoppingCart}/></li>
                        
                        
                        <li>
                        
                            {
                                auth.user && 
                                <span style={{color: 'crimson'}}>Welcome, {auth.user.name}</span>
                                
                            }
                            
                        </li>  

                        <li>
                            {
                                auth.user ? <a href="/login"> Sign out</a>
                                :<a href="/login"> Sign in</a>
                            }
                        </li>   

                        <li><a href="#"><span className=""></span> Sign Up</a></li>               
                    </ul>
                </nav>
                
            </div>
    );
};

export default Header;