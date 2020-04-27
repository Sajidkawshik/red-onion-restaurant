import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';
//style={{width: "18rem"}}
const Item = (props) => {
    console.log(props);
    const {id, name, description, price, image } = props.item;
    return (
        <div className="col-lg-4 content">
            <Link to={"/"+id}>
                <div className="card border border-0">
                    <img src={image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{price}</p>
                        <p className="card-text">{id}</p>
                        <a href="#" className="btn btn-success">Add to cart</a>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Item 