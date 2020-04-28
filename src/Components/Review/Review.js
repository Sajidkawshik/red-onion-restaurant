import React, { useState, useEffect } from 'react';
import cart from '../Cart/Cart';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import menu from '../../menu';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect( () =>{

        const savedCart = getDatabaseCart();
        const productIds = Object.keys(savedCart);
        const previousCart = productIds.map(existingId=>{
            const product = menu.find(pd=> pd.id === existingId);
            product.quantity = savedCart[existingId];
            return product ; 
        })
        setCart(previousCart);

    }, [])
    const removeProduct = (productId) => {
        
        const newCart = cart.filter(pd => pd.id !== productId);    
        setCart(newCart);
        removeFromDatabaseCart(productId);
    } 

    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart.map(pd=><ReviewItem
                key = {pd.id}
                removeProduct = {removeProduct}
                product={pd}></ReviewItem>)
            }

            {
                !cart.length && <h5>Your cart is empty. Please order.</h5>
            }
          
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="shipment">
                        {
                            
                            <button  className="reviewOrderBtn"> Proceed checkout</button>                   
                            
                        }      
                    </Link>
                </Cart>

            </div>

        </div>
    );
};

export default Review;