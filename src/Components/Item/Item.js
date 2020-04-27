import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//style={{width: "18rem"}}
const Item = (props) => {
    
    const {id, name, description, price, image } = props.item;
    return (
        <div className="col-lg-4 content">
           
                <div className="card border border-0">
                     <Link to={"/"+id}>
                        <img src={image} alt="" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{price}</p>
                        <p className="card-text">{id}</p>
                        <button 
                            className="main-button"
                            onClick ={()=>props.handleAddItem(props.item)}
                            ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                        </button>
                    </div>
                </div>
            
        </div>
    );
};

export default Item 