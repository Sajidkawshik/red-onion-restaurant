import React from 'react';
import './Item.css'
//style={{width: "18rem"}}
const Item = (props) => {
    console.log(props);
    return (
        <div className="col-lg-4">
        <div className="card border border-0 " >
           <img src={props.image} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.price}</p>
                <a href="#" className="btn btn-success">Add to cart</a>
            </div>
            </div>
        </div>
    );
};

export default Item 