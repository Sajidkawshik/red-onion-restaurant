import React, { useState, useEffect } from 'react';
import menu from '../../menu';
import Item from '../Item/Item';
import './Breakfast.css'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Breakfast = () => {
    
    const bf= menu.filter(items=>items.category==="breakfast");
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
        <div className="breakfast">
            <div className="row">
                                
                    {
                        bf.map(items=><Item
                        key={items.id}
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
            
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
            
            <div className="wrap">
            
            {
                cart.length ?
                <Link to="/review">
                    <button className="reviewOrderBtn" >Review Order</button>  
                </Link>
                :
                <button className="reviewOrderBtnDisabled" >Review Order</button>            
            }   
        </div>
        
        </div>
        
    );
};

export default Breakfast;