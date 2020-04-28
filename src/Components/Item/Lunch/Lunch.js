import React, { useState, useEffect } from 'react';
import menu from '../../../menu';
import Item from '../Item';
import './Lunch.css';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';


const Lunch = () => {
    
    const ln= menu.filter(items=>items.category==="lunch");
    const{items, setItems} = useState(0);
    const [cart, setCart] = useState([]);

    useEffect (()=>{

        const savedCart = getDatabaseCart();
        const productIds = Object.keys(savedCart);
        const previousCart = productIds.map(existingId=>{
            const product = menu.find(pd=> pd.id === existingId);
            product.quantity = savedCart[existingId];
            return product ; 
        })
        setCart(previousCart);

    }, [])


    const handleAddProduct = (item) => {
        const tobedAddedId = item.id;
        const sameItem = cart.find(pd=>pd.id===tobedAddedId);
        let count = 1;
        let newCart;
        //bujhi nai
        if(sameItem){
            count  = sameItem.quantity +1 ;
            sameItem.quantity = count;
            const others = cart.filter(pd => pd.id !== tobedAddedId);
            newCart = [...others, sameItem];
        }
        else{
            item.quantity = 1;
            newCart = [...cart, item];
        }
        
        setCart(newCart);    
        addToDatabaseCart(item.id,count) ;
    }


    return (
        <div className="lunch">
            <div className="row">
                                
                    {
                        ln.map(items=><Item
                        key={items.key}
                        id={items.id}
                        name={items.name}
                        description={items.description}
                        price={items.price}
                        image={items.image}
                        item={items}
                        handleAddItem={handleAddProduct}>
                        </Item>)
                    }   
                            
            </div>

            <div className="wrap">
            
            {
                cart.length ?
                <button className="reviewOrderBtn" >Review Order</button>  
                :
                <button className="reviewOrderBtn" >Add to cart</button>            
            }   
            </div>
        </div>
        
    );
};

export default Lunch;