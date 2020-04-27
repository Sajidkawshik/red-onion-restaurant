import React from 'react';

const Cart = (props) => {
    const cart = props.cart ; 
    
    //const totalPrice = cart.reduce( (total, prd) => total+ prd.price*prd.quantity, 0);
    let totalPrice = 0 ;
    for(let i = 0 ; i<cart.length ; i++){
        const product = cart[i];
        totalPrice = totalPrice + product.price * product.quantity;
    }
    
    console.log(totalPrice);
    let delivery = 50; 
    const grandTotal = (totalPrice+delivery).toFixed(0);
    
    return (
        <div>
          <h4>Order Summary</h4>  
          <p>Items ordered: {cart.length}</p>
          <p>Product Price: {totalPrice}</p>
          <p><small>Delivery cost: {delivery}</small></p>
          <p>Total price: {grandTotal}</p>
           <br/> 
           {
               props.children
           }
        </div>
    );
};

export default Cart;