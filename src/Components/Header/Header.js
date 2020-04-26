import React from 'react';
import logo from '../../../src/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
            <div className="header" >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href=""><img src={logo} alt=""/></a>

                    <ul className="navbar-nav ml-auto">
                        <li><FontAwesomeIcon icon={faShoppingCart}/></li>
                        <li><a href="#"><span className=""></span> Sign Up</a></li>
                        <li><a href="#"><span className=""></span> Login</a></li>
                      
                    </ul>
                </nav>
                
            </div>
    );
};

export default Header;