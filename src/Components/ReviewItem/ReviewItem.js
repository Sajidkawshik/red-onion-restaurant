import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const{name, quantity, id, price, image} = props.product ; 
    const reviewItemStyle={
        borderBottom: '1px solid lightgrey',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px',
        marginTop: '30px',
        height: '250px'
    }
    return (
        <div style={reviewItemStyle} >
           <div className="reviewItem">
            <div>
                <h4 className="product-name" >{name}</h4>
                <p>Quantity:{quantity}</p>
                <p><small>$ {price}</small></p>
            </div>

            <div>
                <img src={image}></img>
            </div>
            </div>
            
            <button className="reviewOrderBtn"
                    onClick = {() => props.removeProduct(id)}
                    >Remove</button>
        </div>
    );
};

export default ReviewItem;