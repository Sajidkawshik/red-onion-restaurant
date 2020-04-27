import React from 'react';
import { useParams } from 'react-router-dom';
import menu from '../../menu';
import Item from '../Item/Item';
import './ItemDetails.css';

const ItemDetails = () => {
    const {id} = useParams();
    
    const it = menu.find(item=>item.id===id);
    console.log("detailproduct", it);
    return (
        <div className="totalLook">
            <div className="itemDetails">
                <Item item={it}></Item>
            </div>

            <div className="description">
                <p>Item details coming soon...</p>
                <p>{it.name}</p>
                <p>{it.price}</p>
                <a href="#" className="btn btn-success">Add to cart</a>
                
            </div>
        </div>
    );
};

export default ItemDetails;