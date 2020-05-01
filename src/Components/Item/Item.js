import React, { useEffect, useState } from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart, getDatabaseCart,removeFromDatabaseCart } from '../../utilities/databaseManager';
import menu from '../../menu';
//style={{width: "18rem"}}
const Item = (props) => {
    
   

    const {id, name, description, price, image, quantity } = props.item;
    return (
        <div className="col-lg-4 content">
           
                <div className="card border border-0">
                     <Link to={"/item/"+id}>
                        <img src={image} alt="" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{price}</p>
                        {
                            (quantity) ? <p className="card-text">In the cart: {quantity}</p>
                            :
                            <p className="card-text">In the cart: 0 </p>   
                        }
                        <button onClick ={()=>props.handleMinusItem(props.item)}><FontAwesomeIcon icon={faMinus}/></button>                        
                        <button 
                            className="main-button"
                            onClick ={()=>props.handleAddItem(props.item)}
                            ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                        </button>
                        <button onClick ={()=>props.handleAddItem(props.item)}><FontAwesomeIcon icon={faPlus}/></button>
                        
                        
                    </div>
                </div>
            
        </div>
    );
};

export default Item 