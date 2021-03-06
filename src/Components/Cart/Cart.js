import React from 'react';

const Cart = (props) => {
    const cart = props.cart ; 
    
    
    //const totalPrice = cart.reduce( (total, prd) => total+ prd.price*prd.quantity, 0);
    let totalPrice = 0 ;
    for(let i = 0 ; i<cart.length ; i++){
        const product = cart[i];
        totalPrice = totalPrice + product.price * product.quantity;
    }
    
   
    let delivery = 50; 
    const grandTotal = (totalPrice+delivery).toFixed(0);
    
    return (
        <div>
          <h4>Order Summary</h4>  
          <p>Type of items ordered: {cart.length}</p>
          <p>Item(s) price: {totalPrice}</p>
          <p>Delivery cost: {delivery}</p>
          <p>Total price: {grandTotal}</p>
           <br/> 
           {
               props.children
           }
        </div>
    );
};

export default Cart;