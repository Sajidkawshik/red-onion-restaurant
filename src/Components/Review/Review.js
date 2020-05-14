import React, { useState, useEffect } from 'react';
import cart from '../Cart/Cart';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
//import menu from '../../menu';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import { useAuth } from '../Login/useAuth';
const Review = () => {
    const [cart, setCart] = useState([]);

    const [orderPlaced, setOrderPlaced] = useState(false);
    const auth = useAuth();
    
    const removeProduct = (productId) => {

        const newCart = cart.filter(pd => pd.id !== productId);
        setCart(newCart);
        removeFromDatabaseCart(productId);
    }
    
    useEffect(() => {

        const savedCart = getDatabaseCart();
        const productIds = Object.keys(savedCart);

        fetch('http://localhost:3001/getItemsById', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(productIds)
           
        })

            .then(res => res.json())
            .then(data => {
               
                const cartProducts = productIds.map(existingId => {
                    const product = data.find(pd => pd.id === existingId);        
                    product.quantity = savedCart[existingId];
                    //console.log(product);                   
                    return product;
                    
                })
                
                setCart(cartProducts);
               
                
            })
    }, [])

 
    
    return (
        <div>
            <h4 style={{ marginLeft: '60px' }}><a style={{ textDecoration: 'none' }} href="/menu">Back to menu</a></h4>
            <div className="twin-container">
                <div className="product-container">
                    {
                        cart.map(pd => <ReviewItem
                            key={pd.id}
                            removeProduct={removeProduct}
                            product={pd}></ReviewItem>)
                    }

                    {
                        !cart.length && <h5>Your cart is empty. <a href="/menu">Please order</a>.</h5>
                    }

                </div>

                 {cart.length && <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/delivery">
                            {
                                auth.user ?
                                    <button className="reviewOrderBtn"> Proceed checkout</button>
                                    :
                                    <button className="reviewOrderBtn"> Login to proceed</button>
                            }
                        </Link>
                    </Cart>

                </div>
                }
            </div>
        </div>
    );
};

export default Review;