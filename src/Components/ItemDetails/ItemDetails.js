import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemDetails.css';

const ItemDetails = () => {
    // const {id} = useParams();

    // const it = menu.find(item=>item.id===id);
    // console.log("detailproduct", it);
    const { id } = useParams();
    const [item, setItem] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:3001/item/'+id)
            .then(res => res.json())
            .then(data => {
                console.log(id);
                setItem(data);
            })
    }, [])
    return (
        <div className="totalLook">
            <div className="itemDetails">
                {
                    item && <Item item={item}></Item>
                }
            </div>

            {item &&
                <div className="description">

                    <p>Item details coming soon...</p>
                    <p>{item.name}</p>
                    <p>{item.price}</p>


                </div>
            }
            <a href="/menu">Back to menu</a>

        </div>
    );
};

export default ItemDetails;